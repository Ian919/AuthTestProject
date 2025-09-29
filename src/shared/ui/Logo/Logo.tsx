import React from 'react';
import { styled } from '@mui/material/styles';
import LogoPlaceholder from '/src/assets/logos/_Logo Placeholder.svg';

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LogoImage = styled('img')({
  width: 98.24,
  height: 24,
});

interface LogoProps {
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ alt = "Company" }) => {
  return (
    <LogoContainer>
      <LogoImage src={LogoPlaceholder} alt={alt} />
    </LogoContainer>
  );
};
