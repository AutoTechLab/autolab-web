import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '1064px',
  height: '648px',
  backgroundColor: 'dark.400',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  overflow: 'hidden',
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundImage: 'url("/svgs/rectangle-reversed.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    pl: '80px',
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

export const stepWrapper: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  pr: '70px',
};

export const textField: SxProps<Theme> = {
  width: '420px',
  height: '69px',
  borderRadius: '10px',
  mb: '4px',
};

export const title: SxProps<Theme> = {
  typography: 'h4Bold',
  color: 'white.main',
};

export const subtitle: SxProps<Theme> = {
  typography: 'h6',
  color: 'white.main',
  mb: '20px',
};

export const button: SxProps<Theme> = {
  mt: '24px',
};

export const arrowLink: SxProps<Theme> = {
  marginTop: '16px',
};
