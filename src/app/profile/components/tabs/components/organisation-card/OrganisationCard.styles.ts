import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  p: '12px 20px',
  width: '100%',
  height: '88px',

  borderRadius: '6px',
  border: '1px solid',
  borderColor: 'grey.500',
  backgroundColor: 'grey.100',
  boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25);',

  display: 'flex',
  justifyContent: 'space-between',
};

export const info: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '20px',
};

export const avatar: SxProps<Theme> = {
  width: '64px',
  height: '64px',
};

export const deleteButton: SxProps<Theme> = {
  width: '44px',
  height: '44px',
  alignSelf: 'center',
  backgroundColor: 'grey.600',
  '&:hover': {
    backgroundColor: 'grey.500',
  },
  svg: {
    width: '24px',
    height: '24px',
    stroke: 'white',
  },
};
