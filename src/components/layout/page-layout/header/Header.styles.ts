import { SxProps, Theme } from '@mui/system';

export const wrapper: SxProps<Theme> = {
  p: '0px 100px',
  width: '100%',
  height: '56px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  a: {
    p: '6px 10px',
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#1B66AC',
  },
};

export const textLogo: SxProps<Theme> = {
  fontFamily: 'Prompt',
  fontWeight: 700,
  fontSize: '32px',
  fontStyle: 'normal',
  lineHeight: 'normal',
};

export const auth: SxProps<Theme> = {
  display: 'flex',
  width: '280px',
  gap: '8px',

  a: {
    p: '8px 24px',
    fontSize: '14px',
    borderRadius: '6px',
    fontWeight: 600,
  },
};

export const signin = {
  color: '#000',
};

export const signup = {
  backgroundColor: '#1B66AC',
  color: '#FFF',
  letterSpacing: '0.5px',
};
