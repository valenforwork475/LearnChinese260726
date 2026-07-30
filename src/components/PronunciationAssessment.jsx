import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, LoaderCircle, Mic, RotateCcw, Square, TriangleAlert } from 'lucide-react';
import { blobToBase64, recordingToWav } from '../utils/audioWav';

const MAX_RECORDING_MS = 6500;

const errorMessages = {
  assessment_not_configured: 'ระบบตรวจเสียงยังไม่ได้เชื่อมต่อ กรุณาตั้งค่า Azure Speech บน Vercel',
  no_speech: 'ยังไม่ได้ยินเสียง ลองพูดใกล้ไมค์ขึ้นอีกนิด',
  speech_not_recognized: 'เสียงยังไม่ชัดพอ ลองพูดช้าลงและพูดใหม่อีกครั้ง',
  too_many_requests: 'ลองหลายครั้งเกินไป กรุณารอประมาณหนึ่งนาที',
  audio_too_large: 'เสียงยาวเกินไป กรุณาพูดเฉพาะคำบนการ์ด',
  microphone_denied: 'กรุณาอนุญาตการใช้ไมโครโฟน แล้วลองอีกครั้ง',
  microphone_unavailable: 'อุปกรณ์นี้ไม่รองรับการอัดเสียงผ่านเว็บ',
  assessment_service_failed: 'บริการตรวจเสียงขัดข้องชั่วคราว กรุณาลองอีกครั้ง',
  audio_processing_failed: 'ประมวลผลเสียงไม่ได้ กรุณาลองอัดใหม่'
};

function getVerdict(score) {
  if (score >= 85) return { level: 'excellent', title: 'ดีมาก', text: 'เสียงใกล้เคียงคำเป้าหมายมาก' };
  if (score >= 70) return { level: 'close', title: 'ใกล้แล้ว', text: 'ฟังเสียงต้นแบบแล้วลองเก็บรายละเอียดอีกครั้ง' };
  return { level: 'retry', title: 'ลองใหม่อีกครั้ง', text: 'พูดช้าลงและเน้นพยางค์ตามพินอิน' };
}

export default function PronunciationAssessment({ word }) {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  const cleanupStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    setStatus('idle');
    setResult(null);
    setError('');
    cleanupStream();
    return cleanupStream;
  }, [word.id]);

  const submitRecording = async (blob) => {
    setStatus('processing');
    try {
      const wav = await recordingToWav(blob);
      const audioBase64 = await blobToBase64(wav);
      const response = await fetch('/api/pronunciation-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audioBase64, referenceText: word.hanzi })
      });
      const data = await response.json().catch(() => ({ error: 'assessment_service_failed' }));
      if (!response.ok) throw new Error(data.error || 'assessment_service_failed');
      setResult(data);
      setStatus('complete');
    } catch (assessmentError) {
      const code = assessmentError.message in errorMessages ? assessmentError.message : 'audio_processing_failed';
      setError(errorMessages[code]);
      setStatus('error');
    }
  };

  const stopRecording = () => {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
  };

  const startRecording = async () => {
    setResult(null);
    setError('');
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setError(errorMessages.microphone_unavailable);
      setStatus('error');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
        cleanupStream();
        if (blob.size < 500) {
          setError(errorMessages.no_speech);
          setStatus('error');
          return;
        }
        submitRecording(blob);
      };
      recorder.start();
      setStatus('recording');
      timerRef.current = window.setTimeout(stopRecording, MAX_RECORDING_MS);
    } catch (microphoneError) {
      cleanupStream();
      const denied = microphoneError?.name === 'NotAllowedError' || microphoneError?.name === 'SecurityError';
      setError(errorMessages[denied ? 'microphone_denied' : 'microphone_unavailable']);
      setStatus('error');
    }
  };

  const verdict = result ? getVerdict(result.pronunciationScore) : null;
  const isWorking = status === 'recording' || status === 'processing';

  return (
    <section className="pronunciation-assessment" aria-live="polite">
      <div className="pronunciation-heading">
        <div>
          <span>ตรวจการออกเสียง</span>
          <small>พูดเฉพาะคำว่า {word.hanzi}</small>
        </div>
        <span className="assessment-badge">ภาษาจีนกลาง zh-CN</span>
      </div>

      {status === 'idle' && (
        <button type="button" className="record-pronunciation-btn" onClick={startRecording}>
          <Mic size={20} />
          <span><strong>แตะแล้วพูด</strong><small>ระบบจะเทียบกับคำบนการ์ดโดยตรง</small></span>
        </button>
      )}

      {status === 'recording' && (
        <button type="button" className="record-pronunciation-btn recording" onClick={stopRecording}>
          <span className="recording-pulse"><Square size={16} fill="currentColor" /></span>
          <span><strong>กำลังฟัง…</strong><small>พูดเสร็จแล้วแตะเพื่อหยุด</small></span>
        </button>
      )}

      {status === 'processing' && (
        <div className="assessment-processing">
          <LoaderCircle size={22} className="spin" />
          <span><strong>กำลังตรวจเสียง</strong><small>เปรียบเทียบกับเจ้าของภาษา</small></span>
        </div>
      )}

      {status === 'error' && (
        <div className="assessment-error">
          <TriangleAlert size={20} />
          <div><strong>ยังตรวจไม่ได้</strong><span>{error}</span></div>
          <button type="button" onClick={startRecording}>ลองใหม่</button>
        </div>
      )}

      {status === 'complete' && result && (
        <div className={`assessment-result ${verdict.level}`}>
          <div className="assessment-score">
            <CheckCircle2 size={22} />
            <strong>{result.pronunciationScore}</strong><span>/100</span>
          </div>
          <div className="assessment-verdict">
            <strong>{verdict.title}</strong><span>{verdict.text}</span>
          </div>
          <dl className="assessment-breakdown">
            <div><dt>ความแม่น</dt><dd>{result.accuracyScore}</dd></div>
            <div><dt>ความต่อเนื่อง</dt><dd>{result.fluencyScore}</dd></div>
            <div><dt>พูดครบ</dt><dd>{result.completenessScore}</dd></div>
          </dl>
          {result.recognizedText && (
            <p className="recognized-text">ระบบได้ยิน: <strong>{result.recognizedText}</strong></p>
          )}
          <button type="button" className="retry-pronunciation-btn" onClick={startRecording}>
            <RotateCcw size={17} /> ลองพูดอีกครั้ง
          </button>
        </div>
      )}

      {!isWorking && <p className="assessment-note">คะแนนเป็นตัวช่วยฝึก ควรฟังเสียงต้นแบบและลองพูดหลายครั้ง</p>}
    </section>
  );
}
