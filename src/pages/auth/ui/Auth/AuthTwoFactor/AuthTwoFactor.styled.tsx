import { Box, IconButton, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../../../../shared/ui/theme';

export const AuthTwoFactorWrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
});

export const AuthTwoFactorCard = styled(Box)({
  width: '440px',
  background: theme.palette.common.white,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const AuthTwoFactorBackButton = styled(IconButton)({
  color: '#000',
});

export const AuthTwoFactorCompanyLogo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: 0,
  marginBottom: 0,
});

export const AuthTwoFactorCodeInputContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(3),
});

export const AuthTwoFactorCodeInput = styled(TextField)<{ hasError?: boolean }>(
  ({ hasError }) => ({
    width: '52.67px',
    fontSize: '24px',
    '& .MuiOutlinedInput-root': {
      height: '60px',
      '& fieldset': {
        borderColor: hasError ? '#FF4D4F' : '#E0E0E0',
        borderRadius: '8px',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: hasError ? '#FF4D4F' : '#BDBDBD',
      },
      '&.Mui-focused fieldset': {
        borderColor: hasError ? '#FF4D4F' : '#0591FF',
        borderWidth: '1px',
      },
    },
    '& .MuiInputBase-input': {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '600',
    },
  })
);

export const AuthTwoFactorSubmitButton = styled(Button)({
  width: '100%',
  fontSize: '16px',
  fontWeight: '400',
  textTransform: 'none',
  borderRadius: '8px',
  backgroundColor: '#0591FF',
  marginTop: '16px',
  '&:hover': {
    backgroundColor: '#0591FF',
  },
  '&:disabled': {
    backgroundColor: '#D9D9D9',
    color: '#9E9E9E',
  },
});

export const AuthTwoFactorAuthWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const AuthTwoFactorHeaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '20px 0 20px 0',
});

export const AuthTwoFactorBackButtonContainer = styled(IconButton)({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '40px',
  height: '32px',
});

export const AuthTwoFactorBackIcon = styled('svg')({
  width: '12.94px',
  height: '12.52px',
});

export const AuthTwoFactorTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '24px',
  color: '#333',
  textAlign: 'center',
  width: '100%',
  alignItems: 'center',
  marginTop: theme.spacing(0.5),
});

export const AuthTwoFactorDescription = styled(Typography)({
  color: '#666',
  textAlign: 'center',
  fontSize: '16px',
  marginTop: theme.spacing(0.5),
});

export const AuthTwoFactorErrorMessage = styled(Typography)({
  color: '#f44336',
  textAlign: 'left',
  marginTop: theme.spacing(0.75),
  fontSize: '14px',
  width: '100%',
});
