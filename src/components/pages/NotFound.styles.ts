import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  height: {
    desktop: '100%',
    mobile: '100vh',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  m: '14px 24px 106px 24px',

  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};
