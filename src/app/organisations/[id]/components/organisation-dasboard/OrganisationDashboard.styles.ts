import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  maxWidth: '387px',
  p: '16px',
  mr: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: 'white.main',

  borderRadius: '4px',
  boxShadow: '6px 6px 4px 0px rgba(0, 0, 0, 0.25)',

  img: {
    borderRadius: '4px',
  },
};
