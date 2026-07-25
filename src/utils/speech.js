// Utility for Chinese Text-To-Speech using Web Speech API

let selectedVoice = null;

const initVoices = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  
  const voices = window.speechSynthesis.getVoices();
  // Look for Mandarin Chinese voices (zh-CN, zh-TW, zh-HK, or 'zh')
  selectedVoice = voices.find(v => v.lang === 'zh-CN') ||
                  voices.find(v => v.lang.startsWith('zh')) || null;
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  initVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = initVoices;
  }
}

export const speakChinese = (text, rate = 0.9) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  if (!text) return;

  // Clean text from pinyin or extra symbols if passed full object
  const cleanText = typeof text === 'string' ? text : text.hanzi;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'zh-CN';
  utterance.rate = rate; // 0.7 for slow practice, 0.9 or 1.0 for normal

  if (!selectedVoice) {
    initVoices();
  }
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
