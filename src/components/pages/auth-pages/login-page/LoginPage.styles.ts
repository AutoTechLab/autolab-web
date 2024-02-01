import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const wrapper: SxProps<Theme> = {
  width: '1064px',
  height: '648px',
  backgroundColor: 'dark.400',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  overflow: 'hidden',
  form: {
    paddingLeft: '74px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundImage: 'url("/svgs/rectangle.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    pr: '80px',
  },
  a: {
    alignSelf: 'flex-start',
    color: 'orange.500',
    typography: 'body2',
    mb: '48px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export const textField: SxProps<Theme> = {
  width: '420px',
  height: '69px',
  borderRadius: '10px',
  mb: '4px',
};

export const input: SxProps<Theme> = {
  borderRadius: '10px',
  border: 'none',
  WebkitBoxShadow: `0 0 0 1000px ${theme.palette.dark[400]} inset`,
  '&:focus': {
    WebkitBoxShadow: `0 0 0 1000px ${theme.palette.dark[400]} inset`,
  },
};

export const signInText: SxProps<Theme> = {
  typography: 'h4Bold',
  color: 'white.main',
  mb: '24px',
};
