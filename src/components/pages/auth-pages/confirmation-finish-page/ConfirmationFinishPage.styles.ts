import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url("/images/successful-registration.jpg")',
  backgroundSize: 'cover',
  color: 'white.main',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const info: SxProps<Theme> = {
  maxWidth: '558px',
  textAlign: 'center',
  mt: '16px',
};

export const button: SxProps<Theme> = {
  width: '480px',
  mt: '32px',
};
