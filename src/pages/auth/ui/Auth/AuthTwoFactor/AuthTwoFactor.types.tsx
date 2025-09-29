export interface AuthTwoFactorState {
  code: string[];
  error: string;
  timeLeft: number;
  isTimerExpired: boolean;
  hasSubmittedCorrectCode: boolean;
}

export interface AuthTwoFactorProps {
  onSubmit?: (code: string) => void;
  onBack?: () => void;
  onGetNewCode?: () => void;
}

export interface AuthTwoFactorCodeInputProps {
  value: string;
  hasError?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onPaste: (e: React.ClipboardEvent) => void;
  inputRef: (el: HTMLInputElement | null) => void;
  inputProps: {
    maxLength: number;
    style: { textAlign: string };
  };
  variant: string;
}

export interface AuthTwoFactorSubmitButtonProps {
  variant: string;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export interface AuthTwoFactorValidationResult {
  isCodeComplete: boolean;
  isCodeValid: boolean;
  isCodeCorrect: boolean;
  canSubmit: boolean;
  shouldShowError: boolean;
  shouldShowButton: boolean;
  shouldShowGetNewButton: boolean;
}

export interface AuthTwoFactorTimerProps {
  timeLeft: number;
  isTimerExpired: boolean;
  onGetNewCode: () => void;
}
