import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  p: '2px 14px',
};

export const title: SxProps<Theme> = {
  color: '#BCBCBC',
  fontFamily: 'Montserrat',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '140%',
  pb: '12px',
};

export const list: SxProps<Theme> = {
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

export const button: SxProps<Theme> = {
  p: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
export const text: SxProps<Theme> = {
  color: '#fff',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '140%',
  '&:hover': {
    color: '#fff',
    textDecoration: 'underline',
  },
  m: 0,
};
