import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  m: {
    mobile: '106px 24px',
    tablet: '14px 24px 106px 24px',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};
