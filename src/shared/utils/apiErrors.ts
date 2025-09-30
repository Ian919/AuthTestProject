import type { ApiError } from '../api/types';

export const createApiError = (code: string, message: string): ApiError => ({
  code,
  message,
});

export const createNetworkError = (): Error =>
  new Error('Network error: Failed to connect to server');

export const API_ERROR_CODES = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  TOO_MANY_ATTEMPTS: 'TOO_MANY_ATTEMPTS',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  INVALID_CODE: 'INVALID_CODE',
  CODE_EXPIRED: 'CODE_EXPIRED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;
