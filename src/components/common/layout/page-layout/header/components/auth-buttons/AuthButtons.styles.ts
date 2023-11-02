import { SxProps, Theme } from '@mui/material/styles';

export const auth: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',

  a: {
    p: '10px 24px',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    lineHeight: '140%',
    textTransform: 'none',
    borderRadius: '6px',
    fontWeight: 600,
  },
};

export const signin: SxProps<Theme> = {
  borderRadius: '6px',
  border: '2px solid #FF4D00',
  color: '#000 !important',
  '&:hover': {
    border: '2px solid #FF4D00',
  },
};

export const signup: SxProps<Theme> = {
  color: '#fff !important',
  backgroundColor: '#FF4D00',
  boxShadow: 'none !important',
  '&:hover': {
    backgroundColor: '#FF4D00',
  },
};
