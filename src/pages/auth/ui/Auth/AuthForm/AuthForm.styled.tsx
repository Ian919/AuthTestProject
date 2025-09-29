import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../../../../shared/ui/theme';

export const AuthFormWrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
});

export const AuthFormCard = styled(Box)({
  width: '440px',
  height: '372px',
  background: theme.palette.common.white,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  paddingTop: theme.spacing(4),
});

export const AuthFormLogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 500,
  width: '376px',
  height: '64px',
  justifyContent: 'center',
});

export const AuthFormTitleContainer = styled(Box)({
  width: '376px',
  paddingTop: theme.spacing(0.5),
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const AuthFormTitle = styled(Typography)({
  fontSize: '24px',
});

export const AuthFormForm = styled('form')({
  width: '376px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: theme.spacing(3),
});

export const AuthFormEmailIcon = styled('img')({
  width: '11.75px',
  height: '12.44px',
});

export const AuthFormPasswordIcon = styled('img')({
  width: '11px',
  height: '12.5px',
});

export const AuthFormEmailField = styled(TextField)({
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#BDBDBD',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0591FF',
      borderWidth: '2px',
      boxShadow: '0 0 8px 2px rgba(5, 145, 255, 0.5)',
    },
  },
});

export const AuthFormPasswordField = styled(TextField)({
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#BDBDBD',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0591FF',
      borderWidth: '2px',
      boxShadow: '0 0 8px 2px rgba(5, 145, 255, 0.5)',
    },
  },
});

export const AuthFormSubmitButton = styled(Button)<{ disabled?: boolean }>(
  ({ disabled }) => ({
    fontSize: '16px',
    backgroundColor: disabled ? '#F5F5F5' : '#0591FF',
    fontWeight: '400',
    textTransform: 'none',
    borderRadius: '8px',
  })
);
