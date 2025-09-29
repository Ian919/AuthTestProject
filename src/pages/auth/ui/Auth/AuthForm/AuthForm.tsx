import React from 'react';
import { InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../../../shared/ui/Logo';
import VectorItem from '/src/assets/logos/VectorItem.svg';
import VectorLock from '/src/assets/logos/VectorLock.svg';
import { authSchema } from '../../../lib/validation';
import type { AuthFormErrors } from './AuthForm.types';
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
  const [mail, setMail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [errors, setErrors] = React.useState<AuthFormErrors>({});
  const navigate = useNavigate();

  const validateForm = () => {
    try {
      const formData = { email: mail, password };
      authSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: AuthFormErrors = {};
        error.errors.forEach((err: any) => {
          if (err.path[0] === 'email') {
            fieldErrors.email = err.message;
          } else if (err.path[0] === 'password') {
            fieldErrors.password = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const handleLogin = () => {
    if (validateForm()) {
      navigate('/two-factor');
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
        <AuthFormForm>
          <AuthFormEmailField
            placeholder="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={mail}
            onChange={handleEmailChange}
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.password}
            helperText={errors.password}
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
            disabled={!mail || !password}
            onClick={handleLogin}
          >
            Log in
          </AuthFormSubmitButton>
        </AuthFormForm>
      </AuthFormCard>
    </AuthFormWrapper>
  );
};
