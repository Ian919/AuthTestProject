import { createTheme } from '@mui/material/styles';
import { designTokens } from './tokens';

export const theme = createTheme({
  palette: {
    primary: {
      main: designTokens.colors.primary,
    },
    background: designTokens.colors.background,
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeightNormal: designTokens.typography.fontWeight.normal,
    fontWeightMedium: designTokens.typography.fontWeight.medium,
    fontWeightBold: designTokens.typography.fontWeight.bold,
  },
  spacing: designTokens.spacing,
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontFamily:
              '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: '16px',
            opacity: 1,
            color: '#00000040',
          },
          '&::-webkit-input-placeholder': {
            fontSize: '16px',
            opacity: 1,
            color: '#00000040',
          },
          '&::-moz-placeholder': {
            fontSize: '16px',
            opacity: 1,
            color: '#00000040',
          },
          '&:-ms-input-placeholder': {
            fontSize: '16px',
            opacity: 1,
            color: '#00000040',
          },
        },
      },
    },
  },
});
