import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '1064px',
  height: '648px',
  backgroundColor: 'dark.400',
  p: '24px 36px',
  color: 'white.main',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    alignSelf: 'flex-start',
  },
};

export const info: SxProps<Theme> = {
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
};

export const check: SxProps<Theme> = {
  margin: '32px 0 16px 0',
};

export const explanation: SxProps<Theme> = {
  typography: 'h6',
  color: 'gray.600',
  marginBottom: '16px',
};

export const textField: SxProps<Theme> = {
  mb: '48px',
};

export const arrowLink: SxProps<Theme> = {
  mt: '20px',
};
