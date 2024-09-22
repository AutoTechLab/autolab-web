import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  flex: '0 0 auto',
  maxWidth: {
    mobile: '100%',
    desktop: '400px',
  },
  height: 'fit-content',
  p: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: 'white.main',

  borderRadius: '4px',
  boxShadow: '6px 6px 4px 0px rgba(0, 0, 0, 0.25)',

  img: {
    borderRadius: '4px',
    width: '100%',
    height: 'auto',
  },
};
