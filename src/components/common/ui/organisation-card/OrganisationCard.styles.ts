import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  p: '12px 20px',
  width: '100%',

  borderRadius: '6px',
  border: '1px solid',
  borderColor: 'grey.500',
  backgroundColor: 'grey.100',
  boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25);',
};

export const title: SxProps<Theme> = {
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

export const description: SxProps<Theme> = {
  mt: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
};
