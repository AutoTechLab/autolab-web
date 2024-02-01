import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const label = (variant: 'black' | 'white'): SxProps<Theme> => ({
  typography: 'body1',
  '& .MuiTypography-root': {
    color:
      variant === 'white' ? theme.palette.gray[300] : theme.palette.black.main,
    marginLeft: '8px',
  },
});

export const checkbox: SxProps<Theme> = {
  width: '20px',
  height: '20px',
  ml: '5px',
  '&.MuiCheckbox-colorPrimary': {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.green[500],
    },
  },
  '&.Mui-disabled': {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.gray[300],
    },
  },
  '&.MuiCheckbox-colorError': {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.error[400],
    },
  },
};
