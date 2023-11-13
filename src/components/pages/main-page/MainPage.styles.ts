import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '100%',
  height: '645px',
};

export const overview: SxProps<Theme> = {
  backgroundImage: 'url("/images/main-image.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  p: '0 100px',
  height: '100%',
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
};

export const logo: SxProps<Theme> = {
  color: '#FFF',
  fontFamily: 'Montserrat',
  fontSize: '72px',
  fontStyle: 'italic',
  fontWeight: 700,
  lineHeight: '140%',
  textTransform: 'uppercase',
};

export const text: SxProps<Theme> = {
  width: '738px',
  color: '#FFF',
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
  mb: '40px',
};

export const button: SxProps<Theme> = {
  p: '16px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  background: '#FF4C00',
  boxShadow: 'none!important',

  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '140%',
};

export const needs: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '578px',
};

export const question: SxProps<Theme> = {};
