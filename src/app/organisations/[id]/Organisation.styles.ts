import { SxProps, Theme } from '@mui/material/styles';

export const layout: SxProps<Theme> = {
  p: '48px 100px 36px 100px',
  display: 'flex',
  backgroundColor: 'gray.700',
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
};
