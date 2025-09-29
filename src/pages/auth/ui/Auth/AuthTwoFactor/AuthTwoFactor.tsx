import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import { Logo } from '../../../../../shared/ui/Logo';
import type { AuthTwoFactorState } from './AuthTwoFactor.types';
import {
  AuthTwoFactorWrapper,
  AuthTwoFactorCard,
  AuthTwoFactorCompanyLogo,
  AuthTwoFactorCodeInputContainer,
  AuthTwoFactorCodeInput,
  AuthTwoFactorSubmitButton,
  AuthTwoFactorAuthWrapper,
  AuthTwoFactorHeaderContainer,
  AuthTwoFactorBackButtonContainer,
  AuthTwoFactorTitle,
  AuthTwoFactorDescription,
  AuthTwoFactorErrorMessage,
} from './AuthTwoFactor.styled';

export const AuthTwoFactor = () => {
  const [authState, setAuthState] = useState<AuthTwoFactorState>({
    code: ['', '', '', '', '', ''],
    error: '',
    timeLeft: 60,
    isTimerExpired: false,
    hasSubmittedCorrectCode: false,
  });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.timeLeft > 0 && !authState.hasSubmittedCorrectCode) {
      const timer = setTimeout(() => {
        setAuthState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
      return () => clearTimeout(timer);
    } else if (authState.timeLeft === 0 && !authState.hasSubmittedCorrectCode) {
      setAuthState((prev) => ({ ...prev, isTimerExpired: true }));
    }
  }, [authState.timeLeft, authState.hasSubmittedCorrectCode]);

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    if (authState.error) {
      setAuthState((prev) => ({ ...prev, error: '' }));
    }
    setAuthState((prev) => {
      const newCode = [...prev.code];
      newCode[index] = value;
      return { ...prev, code: newCode };
    });
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === 'Backspace' && !authState.code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pastedData = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6);
    setAuthState((prev) => {
      const newCode = [...prev.code];
      for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
      }
      return { ...prev, code: newCode };
    });
    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    const fullCode = authState.code.join('');
    console.log('2FA Code:', fullCode);
    setAuthState((prev) => ({ ...prev, hasSubmittedCorrectCode: true }));
  };

  const handleGetNewCode = () => {
    setAuthState({
      code: ['', '', '', '', '', ''],
      error: '',
      timeLeft: 60,
      isTimerExpired: false,
      hasSubmittedCorrectCode: false,
    });
    inputRefs.current[0]?.focus();
  };

  const isCodeComplete = authState.code.every((digit) => digit !== '');
  const isCodeValid = authState.code.every((digit) => /^\d$/.test(digit));

  const isCodeCorrect = () => {
    if (!isCodeComplete || !isCodeValid) return false;
    const fullCode = authState.code.join('');
    const firstDigit = fullCode[0];
    return !fullCode.split('').every((digit) => digit === firstDigit);
  };

  const canSubmit = isCodeComplete && isCodeValid && isCodeCorrect();
  const shouldShowError = isCodeComplete && isCodeValid && !isCodeCorrect();
  const shouldShowButton = isCodeComplete && isCodeValid;
  const shouldShowGetNewButton =
    authState.isTimerExpired && !authState.hasSubmittedCorrectCode;

  return (
    <AuthTwoFactorWrapper>
      <AuthTwoFactorCard>
        <AuthTwoFactorAuthWrapper>
          <AuthTwoFactorHeaderContainer>
            <AuthTwoFactorBackButtonContainer onClick={handleBack}>
              <ArrowBackIcon />
            </AuthTwoFactorBackButtonContainer>
            <AuthTwoFactorCompanyLogo>
              <Logo />
            </AuthTwoFactorCompanyLogo>
          </AuthTwoFactorHeaderContainer>
          <AuthTwoFactorTitle variant="h4">
            Two-Factor Authentication
          </AuthTwoFactorTitle>
          <AuthTwoFactorDescription variant="body1">
            Enter the 6-digit code from the Google Authenticator app
          </AuthTwoFactorDescription>
        </AuthTwoFactorAuthWrapper>
        <AuthTwoFactorCodeInputContainer>
          {authState.code.map((digit, index) => (
            <AuthTwoFactorCodeInput
              key={index}
              value={digit}
              hasError={shouldShowError}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              inputRef={(el) => (inputRefs.current[index] = el)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: 'center' },
              }}
              variant="outlined"
            />
          ))}
        </AuthTwoFactorCodeInputContainer>
        {(authState.error || shouldShowError) && (
          <AuthTwoFactorErrorMessage variant="body2">
            {authState.error || 'Invalid Code'}
          </AuthTwoFactorErrorMessage>
        )}
        {shouldShowButton && !shouldShowGetNewButton && (
          <AuthTwoFactorSubmitButton
            variant="contained"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            Continue
          </AuthTwoFactorSubmitButton>
        )}

        {shouldShowGetNewButton && (
          <AuthTwoFactorSubmitButton
            variant="contained"
            onClick={handleGetNewCode}
          >
            Get New
          </AuthTwoFactorSubmitButton>
        )}
      </AuthTwoFactorCard>
    </AuthTwoFactorWrapper>
  );
};
