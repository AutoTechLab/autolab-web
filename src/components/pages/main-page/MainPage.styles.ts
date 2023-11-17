import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {};

export const overview: SxProps<Theme> = {
  height: '645px',
  backgroundImage: 'url("/images/main-image.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: '0 100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const title: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  mb: '24px',
  svg: {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
};

export const logo: SxProps<Theme> = {
  color: '#FFF',
  typography: 'logoLarge',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};

export const text: SxProps<Theme> = {
  width: '738px',
  color: 'white.main',
  typography: 'h6Medium',
  mb: '32px',
};

export const button: SxProps<Theme> = {
  p: '16px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  background: '#FF4C00',
  boxShadow: 'none!important',

  typography: 'h6Bold',
};

export const needs: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '578px',
};

export const question: SxProps<Theme> = {
  typography: 'h3Bold',
};
