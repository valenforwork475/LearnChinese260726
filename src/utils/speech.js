// Web Speech API Utility with prioritized Mobile Female Mandarin Chinese voices

let selectedVoice = null;

const findFemaleChineseVoice = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Try to find iOS/Android known female Mandarin Chinese voices
  const preferredFemaleNames = [
    'ting-ting', 'tingting', 'mei-jia', 'sin-ji', 'xiaoxiao', 'xiaoyi',
    'google 普通话', 'google chinese', 'chinese female', 'mandarin female', 'zh-cn'
  ];

  let femaleVoice = voices.find(v => {
    const langMatch = v.lang && (v.lang === 'zh-CN' || v.lang.startsWith('zh'));
    const nameLower = v.name.toLowerCase();
    return langMatch && preferredFemaleNames.some(p => nameLower.includes(p));
  });

  // 2. Fallback to any zh-CN or zh voice
  if (!femaleVoice) {
    femaleVoice = voices.find(v => v.lang === 'zh-CN') ||
                  voices.find(v => v.lang && v.lang.startsWith('zh')) || null;
  }

  return femaleVoice;
};

const initVoices = () => {
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

export const speakChinese = (text, rate = 0.9) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  if (!text) return;

  const cleanText = typeof text === 'string' ? text : text.hanzi;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'zh-CN';
  utterance.rate = rate;
  utterance.pitch = 1.15; // Set higher pitch (1.15) for natural female Mandarin tone across mobile devices

  if (!selectedVoice) {
    selectedVoice = findFemaleChineseVoice();
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
