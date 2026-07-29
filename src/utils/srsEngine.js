// Spaced Repetition System (SRS) Engine with Memory Statistics Dashboard

const STORAGE_KEY = 'sinostep_vocab_srs_v1';
const DAILY_STATS_KEY = 'sinostep_vocab_daily_stats_v1';

// Intervals in days for each mastery level
const INTERVALS_DAYS = [0, 1, 3, 7, 14];

function getLocalDateKey(timestamp = Date.now()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function readDailyStats() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(DAILY_STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error('Failed to load daily vocabulary stats', error);
    return {};
  }
}

function recordDailyResult(wordId, remembered, timestamp) {
  if (typeof window === 'undefined') return;

  const history = readDailyStats();
  const dateKey = getLocalDateKey(timestamp);
  const day = history[dateKey] || {
    wordResults: {},
    rememberedAttempts: 0,
    forgottenAttempts: 0
  };

  day.wordResults[wordId] = remembered ? 'remembered' : 'forgotten';
  if (remembered) {
    day.rememberedAttempts += 1;
  } else {
    day.forgottenAttempts += 1;
  }
  history[dateKey] = day;

  try {
    localStorage.setItem(DAILY_STATS_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save daily vocabulary stats', error);
  }
}

export function getSRSData() {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error('Failed to load SRS data', error);
    return {};
  }
}

export function saveSRSData(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save SRS data', error);
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
  const reviewedAt = Date.now();
  const current = data[wordId] || {
    wordId,
    level: 0,
    nextReviewDate: reviewedAt,
    lastReviewed: null,
    reviewCount: 0
  };

  const newLevel = remembered ? Math.min(current.level + 1, 4) : 0;
  const daysToAdd = INTERVALS_DAYS[newLevel];
  const nextReviewDate = reviewedAt + daysToAdd * 24 * 60 * 60 * 1000;

  const updated = {
    wordId,
    level: newLevel,
    nextReviewDate,
    lastReviewed: reviewedAt,
    reviewCount: current.reviewCount + 1
  };

  data[wordId] = updated;
  saveSRSData(data);
  recordDailyResult(wordId, remembered, reviewedAt);
  return updated;
}

export function getDailyStudyStats(numberOfDays = 7) {
  const history = readDailyStats();
  const days = [];

  for (let offset = 0; offset < numberOfDays; offset += 1) {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - offset);
    const dateKey = getLocalDateKey(date.getTime());
    const saved = history[dateKey] || { wordResults: {} };
    const results = Object.values(saved.wordResults || {});

    days.push({
      dateKey,
      date,
      studied: results.length,
      remembered: results.filter(result => result === 'remembered').length,
      forgotten: results.filter(result => result === 'forgotten').length,
      rememberedAttempts: saved.rememberedAttempts || 0,
      forgottenAttempts: saved.forgottenAttempts || 0
    });
  }

  return days;
}

export function getPendingReviewWords(vocabList) {
  const data = getSRSData();
  const now = Date.now();
  const todayKey = getLocalDateKey(now);

  return vocabList.filter(item => {
    const progress = data[item.id];
    if (!progress || progress.reviewCount === 0) return false;

    const reviewedToday = progress.lastReviewed &&
      getLocalDateKey(progress.lastReviewed) === todayKey;
    if (reviewedToday) return false;

    return progress.level === 0 || progress.nextReviewDate <= now;
  });
}

export function getMemoryStats(vocabList) {
  const data = getSRSData();
  let rememberedCount = 0;
  let masteredCount = 0;
  let learningCount = 0;
  let newOrHardCount = 0;

  vocabList.forEach(item => {
    const progress = data[item.id];
    const level = progress ? progress.level : 0;
    if (level === 0) {
      newOrHardCount += 1;
    } else {
      rememberedCount += 1;
      if (level >= 3) {
        masteredCount += 1;
      } else {
        learningCount += 1;
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
    const progress = data[item.id];
    if (!progress) return true;
    return progress.nextReviewDate <= now || progress.level === 0;
  });
}