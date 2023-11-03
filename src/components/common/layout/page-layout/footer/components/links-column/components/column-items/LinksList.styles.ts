import { SxProps, Theme } from '@mui/material/styles';

export const list: SxProps<Theme> = {
  ul: {
    p: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  a: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '140%',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
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
