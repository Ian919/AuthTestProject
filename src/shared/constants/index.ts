export const ROUTES = {
  LOGIN: '/',
  TWO_FACTOR: '/two-factor',
} as const;

export const API_DELAYS = {
  LOGIN: 1000,
  TWO_FACTOR: 800,
} as const;

export const TIMER_DURATION = 60;

export const CODE_LENGTH = 6;
