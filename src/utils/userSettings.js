// User Routine Schedule Settings stored in LocalStorage

const SETTINGS_KEY = 'sinostep_user_schedule_v1';

const DEFAULT_SCHEDULE = {
  wakeTime: '07:00',   // Default wake up time
  lunchTime: '12:00',  // Default lunch time
  bedTime: '23:00'     // Default bedtime
};

export function getUserSchedule() {
  if (typeof window === 'undefined') return DEFAULT_SCHEDULE;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULT_SCHEDULE, ...JSON.parse(raw) } : DEFAULT_SCHEDULE;
  } catch (e) {
    console.error('Failed to load user schedule', e);
    return DEFAULT_SCHEDULE;
  }
}

export function saveUserSchedule(schedule) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(schedule));
  } catch (e) {
    console.error('Failed to save user schedule', e);
  }
}
