const requestsByIp = new Map();
const MAX_REQUESTS_PER_MINUTE = 12;
const MAX_AUDIO_BYTES = 700_000;

function allowRequest(ip) {
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter((time) => now - time < 60_000);
  if (recent.length >= MAX_REQUESTS_PER_MINUTE) return false;
  recent.push(now);
  requestsByIp.set(ip, recent);
  return true;
}

function send(res, status, body) {
  res.status(status).json(body);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { error: 'method_not_allowed' });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (!allowRequest(ip)) return send(res, 429, { error: 'too_many_requests' });

  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) return send(res, 503, { error: 'assessment_not_configured' });

  const { audioBase64, referenceText } = req.body || {};
  if (typeof referenceText !== 'string' || !referenceText.trim() || referenceText.length > 80) {
    return send(res, 400, { error: 'invalid_reference_text' });
  }
  if (typeof audioBase64 !== 'string') return send(res, 400, { error: 'invalid_audio' });

  let audio;
  try {
    audio = Buffer.from(audioBase64, 'base64');
  } catch {
    return send(res, 400, { error: 'invalid_audio' });
  }
  if (!audio.length || audio.length > MAX_AUDIO_BYTES) return send(res, 413, { error: 'audio_too_large' });

  const assessmentConfig = Buffer.from(JSON.stringify({
    ReferenceText: referenceText.trim(),
    GradingSystem: 'HundredMark',
    Granularity: 'Phoneme',
    Dimension: 'Comprehensive',
    EnableMiscue: true
  }), 'utf8').toString('base64');

  try {
    const endpoint = new URL(`https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`);
    endpoint.searchParams.set('language', 'zh-CN');
    endpoint.searchParams.set('format', 'detailed');
    endpoint.searchParams.set('profanity', 'raw');

    const azureResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Ocp-Apim-Subscription-Key': key,
        'Pronunciation-Assessment': assessmentConfig
      },
      body: audio
    });
    const result = await azureResponse.json().catch(() => null);
    if (!azureResponse.ok || !result) {
      console.error('Azure pronunciation request failed', azureResponse.status, result);
      return send(res, 502, { error: 'assessment_service_failed' });
    }

    const best = result.NBest?.[0];
    const assessment = best?.PronunciationAssessment;
    if (!best || !assessment) {
      return send(res, 422, {
        error: result.RecognitionStatus === 'InitialSilenceTimeout' ? 'no_speech' : 'speech_not_recognized'
      });
    }

    return send(res, 200, {
      recognizedText: best.Display || result.DisplayText || '',
      accuracyScore: Math.round(assessment.AccuracyScore || 0),
      fluencyScore: Math.round(assessment.FluencyScore || 0),
      completenessScore: Math.round(assessment.CompletenessScore || 0),
      pronunciationScore: Math.round(assessment.PronScore || 0),
      words: (best.Words || []).map((word) => ({
        word: word.Word,
        accuracyScore: Math.round(word.PronunciationAssessment?.AccuracyScore || 0),
        errorType: word.PronunciationAssessment?.ErrorType || 'None',
        phonemes: (word.Phonemes || []).map((phoneme) => ({
          phoneme: phoneme.Phoneme,
          accuracyScore: Math.round(phoneme.PronunciationAssessment?.AccuracyScore || 0)
        }))
      }))
    });
  } catch (error) {
    console.error('Pronunciation assessment unavailable', error);
    return send(res, 502, { error: 'assessment_service_failed' });
  }
}
