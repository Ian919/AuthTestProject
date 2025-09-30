import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { mockLogin, mockTwoFactor } from './mockApi';
import type { LoginRequest, TwoFactorRequest } from './types';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => mockLogin(data),
    onSuccess: () => {
      toast.success('Login successful! Redirecting...');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed. Please try again.');
    },
  });
};

export const useTwoFactor = () => {
  return useMutation({
    mutationFn: (data: TwoFactorRequest) => mockTwoFactor(data),
    onSuccess: () => {
      toast.success('Two-factor authentication successful!');
    },
    onError: (error: Error) => {
      toast.error(
        error.message || '2FA verification failed. Please try again.'
      );
    },
  });
};
