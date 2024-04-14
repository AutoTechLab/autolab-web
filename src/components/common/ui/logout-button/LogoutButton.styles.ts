import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const button: SxProps<Theme> = {
  p: '4px 12px',

  textTransform: 'none',
  outline: '2px solid',

  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: 'orange.100',
  backgroundColor: 'rgba(255, 84, 30, 0.20);',
  outlineColor: 'rgba(255, 84, 30, 0.20);',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: 'rgba(255, 84, 30, 0.35);',
    outlineColorColor: 'rgba(255, 84, 30, 0.35);',
  },
  '&:active': {
    backgroundColor: 'rgba(246, 70, 15, 0.60);',
    outline: '2px solid',
    outlineColor: 'rgba(246, 70, 15, 0.60);',
  },
  '&:focus': {
    backgroundColor: 'rgba(255, 84, 30, 0.35);',
    outline: '2px solid',
    outlineColor: theme.palette.orange['100'],
  },

  svg: {
    width: '24px',
    height: '24px',
    path: {
      stroke: theme.palette.orange['100'],
    },
  },
};
