import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  a: {
    margin: 0,
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

    svg: {
      width: '24px',
      height: '24px',
    },
  },
};
