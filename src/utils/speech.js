// High-Quality Native Mandarin Chinese Audio Engine for Mobile & Web Devices

let currentAudio = null;
let selectedVoice = null;

const findFemaleChineseVoice = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Known high quality Mandarin Chinese voices on iOS / Android / Desktop
  const preferredNames = [
    'ting-ting', 'tingting', 'mei-jia', 'sin-ji', 'xiaoxiao', 'xiaoyi',
    'yunxi', 'yunyang', 'li-mu', 'google 普通话', 'google chinese',
    'chinese female', 'mandarin female', 'zh-cn', 'cmn'
  ];

  let bestVoice = voices.find(v => {
    const langMatch = v.lang && (v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh') || v.lang.startsWith('cmn'));
    const nameLower = v.name.toLowerCase();
    return langMatch && preferredNames.some(p => nameLower.includes(p));
  });

  if (!bestVoice) {
    bestVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang === 'cmn-Hans-CN') ||
                voices.find(v => v.lang && (v.lang.startsWith('zh') || v.lang.startsWith('cmn'))) || null;
  }

  return bestVoice;
};

const initVoices = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  selectedVoice = findFemaleChineseVoice();
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  initVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      initVoices();
    };
  }
}

// Fallback to Web Speech API if Audio Stream is unavailable
const speakWebSpeech = (cleanText, rate = 0.9) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;
    utterance.pitch = 1.0; // Natural 1.0 pitch preserves authentic Mandarin tones without distortion

    if (!selectedVoice) {
      selectedVoice = findFemaleChineseVoice();
    }
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('WebSpeech API fallback failed', e);
  }
};

/**
 * Primary Speech function: Plays 100% authentic native Mandarin audio stream (Google Native Audio)
 * and falls back to optimized Web Speech API if needed.
 */
export const speakChinese = (text, rate = 0.9) => {
  if (typeof window === 'undefined') return;
  if (!text) return;

  const cleanText = typeof text === 'string' ? text : (text.hanzi || '');
  if (!cleanText.trim()) return;

  // Stop any ongoing speech/audio
  stopSpeech();

  // 1. Try Google Native Mandarin TTS Endpoint (Crystal clear native speaker audio)
  try {
    const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=zh-CN&client=tw-ob`;
    const audio = new Audio(googleUrl);
    currentAudio = audio;
    audio.playbackRate = Math.min(Math.max(rate, 0.5), 1.5);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // If autoplay blocked or network fails, fallback to local WebSpeech API
        console.warn('Online native audio play blocked/failed, using device WebSpeech API:', err);
        speakWebSpeech(cleanText, rate);
      });
    }
  } catch (err) {
    speakWebSpeech(cleanText, rate);
  }
};

export const stopSpeech = () => {
  if (typeof window === 'undefined') return;

  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
};
