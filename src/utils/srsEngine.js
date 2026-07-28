// Spaced Repetition System (SRS) Engine with Memory Statistics Dashboard

const STORAGE_KEY = 'sinostep_vocab_srs_v1';

// Intervals in days for each mastery level
const INTERVALS_DAYS = [0, 1, 3, 7, 14];

export function getSRSData() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to load SRS data', e);
    return {};
  }
}

export function saveSRSData(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save SRS data', e);
  }
}

export function getWordProgress(wordId) {
  const data = getSRSData();
  return data[wordId] || {
    wordId,
    level: 0,
    nextReviewDate: Date.now(),
    lastReviewed: null,
    reviewCount: 0
  };
}

export function markWordProgress(wordId, remembered) {
  const data = getSRSData();
  const current = data[wordId] || {
    wordId,
    level: 0,
    nextReviewDate: Date.now(),
    lastReviewed: null,
    reviewCount: 0
  };

  let newLevel = current.level;
  if (remembered) {
    newLevel = Math.min(current.level + 1, 4);
  } else {
    newLevel = 0;
  }

  const daysToAdd = INTERVALS_DAYS[newLevel];
  const nextReviewDate = Date.now() + daysToAdd * 24 * 60 * 60 * 1000;

  const updated = {
    wordId,
    level: newLevel,
    nextReviewDate,
    lastReviewed: Date.now(),
    reviewCount: current.reviewCount + 1
  };

  data[wordId] = updated;
  saveSRSData(data);
  return updated;
}

export function getMemoryStats(vocabList) {
  const data = getSRSData();
  let rememberedCount = 0; // Level >= 1 (Any remembered word)
  let masteredCount = 0; // Level 3 & 4
  let learningCount = 0; // Level 1 & 2
  let newOrHardCount = 0; // Level 0 or not started

  vocabList.forEach(item => {
    const prog = data[item.id];
    const lvl = prog ? prog.level : 0;
    if (lvl === 0) {
      newOrHardCount++;
    } else {
      rememberedCount++;
      if (lvl >= 3) {
        masteredCount++;
      } else {
        learningCount++;
      }
    }
  });

  const total = vocabList.length || 1;
  const progressPercent = Math.round((rememberedCount / total) * 100);

  return {
    total: vocabList.length,
    rememberedCount,
    masteredCount,
    learningCount,
    newOrHardCount,
    progressPercent
  };
}

export function getDueWords(vocabList) {
  const data = getSRSData();
  const now = Date.now();

  return vocabList.filter(item => {
    const prog = data[item.id];
    if (!prog) return true;
    return prog.nextReviewDate <= now || prog.level === 0;
  });
}
