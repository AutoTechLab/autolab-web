import { SxProps, Theme } from '@mui/material/styles';

export const list: SxProps<Theme> = {
  ul: {
    p: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  a: {
    color: 'white.main',
    typography: 'body1',
    textDecoration: 'none',
    '&:hover': {
      color: 'white.main',
      textDecoration: 'underline',
    },
    m: 0,
  },
};

export const button: SxProps<Theme> = {
  p: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
export const text: SxProps<Theme> = {};
