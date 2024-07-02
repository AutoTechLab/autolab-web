import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

export const search: SxProps<Theme> = {
  maxWidth: '794px',
  width: '100%',
  mt: '26px',
  display: 'inline-flex',
  gap: '16px',
};

export const input: SxProps<Theme> = {
  maxWidth: '730px',
  flexGrow: 1,
};
