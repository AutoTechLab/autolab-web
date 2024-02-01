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

export const alert: SxProps<Theme> = {
  width: '420px',
  backgroundColor: 'rgba(127, 214, 60, 0.20)',
  p: '10px 20px',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '6px',
  gap: '16px',
  border: '2px solid',
  borderColor: 'green.400',
  mb: '32px',
};
