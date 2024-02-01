import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  color: 'white.main',
  gap: '12px',
  transition: 'color 0.15s',
  '&:hover': {
    color: 'gray.500',
  },
  '&:active': {
    color: 'gray.400',
  },
};
