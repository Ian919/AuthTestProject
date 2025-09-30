import type {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  TwoFactorRequest,
  TwoFactorResponse,
} from './types';
import { delay, createRandomCases } from '../utils/mockUtils';
import {
  createApiError,
  createNetworkError,
  API_ERROR_CODES,
} from '../utils/apiErrors';
import { API_DELAYS } from '../constants';

export const mockLogin = async (
  data: LoginRequest
): Promise<ApiResponse<LoginResponse>> => {
  await delay(API_DELAYS.LOGIN);

  return createRandomCases([
    {
      probability: 0.1,
      result: () => {
        throw createNetworkError();
      },
    },
    {
      probability: 0.1,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.INVALID_CREDENTIALS,
          'Invalid email or password'
        );
      },
    },
    {
      probability: 0.1,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.TOO_MANY_ATTEMPTS,
          'Too many login attempts. Please try again later.'
        );
      },
    },
    {
      probability: 0.1,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.SERVICE_UNAVAILABLE,
          'Service temporarily unavailable'
        );
      },
    },
    {
      probability: 0.6,
      result: () => ({
        data: {
          token: 'temp-token-123',
          user: {
            id: '1',
            email: data.email,
            name: 'Test User',
          },
        },
        message: 'Login successful',
      }),
    },
  ]);
};

export const mockTwoFactor = async (
  _data: TwoFactorRequest
): Promise<ApiResponse<TwoFactorResponse>> => {
  await delay(API_DELAYS.TWO_FACTOR);

  return createRandomCases([
    {
      probability: 0.15,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.INVALID_CODE,
          'Invalid verification code'
        );
      },
    },
    {
      probability: 0.1,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.CODE_EXPIRED,
          'Verification code has expired'
        );
      },
    },
    {
      probability: 0.05,
      result: () => {
        throw createApiError(
          API_ERROR_CODES.INTERNAL_ERROR,
          'Internal server error'
        );
      },
    },
    {
      probability: 0.7,
      result: () => ({
        data: {
          accessToken: 'access-token-456',
          refreshToken: 'refresh-token-789',
          user: {
            id: '1',
            email: 'test@example.com',
            name: 'Test User',
          },
        },
        message: 'Two-factor authentication successful',
      }),
    },
  ]);
};
