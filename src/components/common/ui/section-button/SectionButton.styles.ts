import { SxProps, Theme } from '@mui/material/styles';

export const button = (isCurTab: boolean): SxProps<Theme> => ({
  p: '10px 20px',
  width: '100%',
  height: '44px',
  borderRadius: 0,
  borderLeft: '3px solid',
  borderColor: 'transparent',
  justifyContent: 'flex-start',

  '.MuiTypography-root': {
    height: '22px',
    color: 'black!important',
  },

  display: 'flex',
  gap: '8px',
  alignItems: 'center',

  textTransform: 'none',

  svg: {
    width: '24px',
    height: '24px',
    stroke: 'black',
  },

  '&:hover': {
    backgroundColor: 'gray.600',
    borderColor: 'orange.300',
  },

  '&:active': {
    backgroundColor: 'gray.800',
    borderColor: 'orange.300',
  },

  '&:focus': {
    backgroundColor: 'gray.500',
    borderColor: 'orange.300',
  },

  ...(isCurTab && {
    backgroundColor: 'gray.800',
    borderColor: 'orange.300',
  }),
});
