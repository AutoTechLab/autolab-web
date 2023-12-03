import { SxProps, Theme } from '@mui/material/styles';

export const section: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
};

export const title: SxProps<Theme> = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  '& .MuiTypography-root': {
    color: 'white.main',
    typography: 'logoMedium',
  },
};

export const question: SxProps<Theme> = {
  typography: 'h5Medium',
  color: 'white.main',
};
