import { SxProps, Theme } from '@mui/material/styles';

export const layout: SxProps<Theme> = {
  p: {
    mobile: '16px',
    tablet: '32px',
    desktop: '48px 100px 36px 100px',
  },
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'gray.700',
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  gap: {
    mobile: '10px',
    desktop: '20px',
  },
};

export const wrapper: SxProps<Theme> = {
  width: '100%',
};

export const search: SxProps<Theme> = {
  width: '100%',
  my: '16px',
  display: 'inline-flex',
  gap: '16px',
};

export const input: SxProps<Theme> = {
  width: '100%',
  backgroundColor: 'white',
  '.MuiInputBase-root': {
    backgroundColor: 'white!important',
  },
};
