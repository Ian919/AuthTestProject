import React from 'react';
import { InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../../../shared/ui/Logo';
import VectorItem from '/src/assets/logos/VectorItem.svg';
import VectorLock from '/src/assets/logos/VectorLock.svg';
import { authSchema } from '../../../lib/validation';
import { useLogin } from '../../../../../shared/api/hooks';
import {
  handleValidationError,
  validateWithSchema,
} from '../../../../../shared/utils/validation';
import { ROUTES } from '../../../../../shared/constants';
import {
  AuthFormWrapper,
  AuthFormCard,
  AuthFormLogoContainer,
  AuthFormTitleContainer,
  AuthFormTitle,
  AuthFormForm,
  AuthFormEmailIcon,
  AuthFormPasswordIcon,
  AuthFormEmailField,
  AuthFormPasswordField,
  AuthFormSubmitButton,
} from './AuthForm.styled';

export const AuthForm = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const validateForm = () => {
    const formData = { email, password };
    const { isValid, error } = validateWithSchema(authSchema, formData);

    if (!isValid && error) {
      handleValidationError(error);
    }

    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (validateForm()) {
      loginMutation.mutate(
        { email, password },
        {
          onSuccess: () => {
            navigate(ROUTES.TWO_FACTOR);
          },
          onError: () => {},
        }
      );
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormCard>
        <AuthFormLogoContainer>
          <Logo />
        </AuthFormLogoContainer>
        <AuthFormTitleContainer>
          <AuthFormTitle variant="h6" align="center" fontWeight="600">
            Sign in to your account to <br /> continue
          </AuthFormTitle>
        </AuthFormTitleContainer>
        <AuthFormForm onKeyDown={handleKeyDown}>
          <AuthFormEmailField
            placeholder="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AuthFormEmailIcon src={VectorItem} alt="email icon" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <AuthFormPasswordField
            placeholder="Password"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AuthFormPasswordIcon
                      src={VectorLock}
                      alt="password icon"
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
          <AuthFormSubmitButton
            variant="contained"
            fullWidth
            disabled={!email || !password || loginMutation.isPending}
            onClick={handleLogin}
          >
            Log in
          </AuthFormSubmitButton>
        </AuthFormForm>
      </AuthFormCard>
    </AuthFormWrapper>
  );
};
