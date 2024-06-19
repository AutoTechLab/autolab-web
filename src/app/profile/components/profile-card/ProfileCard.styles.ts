import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  p: '28px',
  height: '243px',
  display: 'flex',
  justifyContent: 'space-between',

  borderRadius: '6px',
  border: '1.5px solid',
  borderColor: 'grey.400',
  backgroundColor: 'white',
  boxShadow: '4px 4px 6px 0px rgba(0, 0, 0, 0.15)',
};

export const info: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '36px',
};

export const avatar: SxProps<Theme> = {
  width: '160px',
  height: '160px',
};

export const iconInfo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  mb: '10px',
  svg: {
    width: '24px',
    height: '24px',
    color: 'orange.100',
  },
};
