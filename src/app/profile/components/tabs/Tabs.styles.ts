import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  mt: '12px',
};

export const divider: SxProps<Theme> = {
  mt: '8px',
  height: '2px',
  backgroundColor: 'orange.500',
};

export const tab = (isCurTab: boolean): SxProps<Theme> => ({
  p: '12px 24px',

  ...(isCurTab && {
    color: 'orange.400',
    '.MuiTypography-body1': {
      borderBottom: '1px solid',
      borderColor: 'orange.400',
    },
  }),
});
