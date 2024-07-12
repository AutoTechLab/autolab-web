import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  maxWidth: {
    mobile: '100%',
    tablet: '603px',
  },
  p: '8px',

  display: 'inline-flex',
  gap: '20px',

  float: 'left',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    width: '0',
    height: '0',
  },

  backgroundColor: 'white.main',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '6px',
};

export const button = (isActive: boolean): SxProps<Theme> => ({
  ...(isActive && {
    backgroundColor: 'rgba(255, 84, 30, 0.35)',
    color: 'orange.100',
  }),
});
