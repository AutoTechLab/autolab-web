import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: {
    desktop: 'row',
    mobile: 'column',
  },
  alignItems: {
    desktop: 'flex-start',
    mobile: 'center',
  },
  zIndex: 11,

  padding: {
    desktop: '38px 100px',
    mobileMedium: '38px 50px',
    mobile: '16px',
  },
  height: 'auto',
  backgroundColor: 'dark.300',
};

export const textLogo: SxProps<Theme> = {
  display: 'flex',
  flexDirection: {
    desktop: 'row',
    mobile: 'column',
  },
  gap: '8px',
  alignItems: 'center',
  mb: '26px',
};

export const text: SxProps<Theme> = {
  color: 'white.main',
  typography: 'logoSmall',
};

export const columns: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: {
    desktop: 'flex-end',
    mobileMedium: 'center',
    mobile: 'space-between',
  },
  gap: {
    desktop: '80px',
    mobileMedium: '40px',
    mobile: '16px',
  },
};
