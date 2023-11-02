import { SxProps, Theme } from '@mui/system';

export const menu: SxProps<Theme> = {
  display: 'flex',
  gap: '16px',
};

export const item: SxProps<Theme> = {
  p: '12px, 24px',
  color: '#000',
  fontSize: '14px',
  fontWeight: '600',
  '&:hover': {
    textDecoration: 'underline',
  },
};
