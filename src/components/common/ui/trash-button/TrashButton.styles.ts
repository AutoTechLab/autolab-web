import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const button: SxProps<Theme> = {
  width: '44px',
  height: '44px',
  alignSelf: 'center',
  backgroundColor: 'gray.100',
  '&:hover': {
    backgroundColor: 'dark.600',
  },
  '&:active': {
    backgroundColor: 'gray.200',
    svg: {
      stroke: theme.palette.green['700'],
    },
  },
  '&:focus': {
    backgroundColor: 'gray.100',
    border: '2px solid',
    borderColor: 'dark.600',
  },
  '&:disabled': {
    backgroundColor: 'gray.600',
    svg: {
      stroke: theme.palette.gray['500'],
    },
  },
  svg: {
    width: '24px',
    height: '24px',
    stroke: 'white',
  },
};
