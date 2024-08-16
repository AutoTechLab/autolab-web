import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: {
    desktop: '1064px',
    mobile: '100%',
  },
  height: {
    desktop: '648px',
    mobile: '100%',
  },
  backgroundColor: 'dark.400',
  display: 'flex',
  flexDirection: {
    desktop: 'row',
    mobile: 'column',
  },
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',

  form: {
    maxWidth: '520px',
    width: {
      desktop: '70%',
      mobile: '100%',
    },
    ml: {
      desktop: '74px',
      mobile: 0,
    },
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

  img: {
    width: '100%',
    height: 'auto',
  },
};

export const input: SxProps<Theme> = {};

export const image = {
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
};

export const signInText: SxProps<Theme> = {
  typography: {
    desktop: 'h4Bold',
    mobile: 'h5Bold',
  },
  color: 'white.main',
  mb: '24px',
};

export const arrowLink: SxProps<Theme> = {
  marginTop: '16px',
};
