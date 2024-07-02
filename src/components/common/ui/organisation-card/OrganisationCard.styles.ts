import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  a: {
    display: 'block',
    p: '12px 20px',
    borderRadius: '6px',
    border: '1px solid',
    borderColor: 'gray.500',
    backgroundColor: 'gray.700',
    boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25)',

    '&:hover': {
      backgroundColor: 'gray.600',
    },

    '&:focus': {
      outline: '2px solid',
      outlineColor: 'gray.100',
    },
  },
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
  border: '1px solid',
  borderColor: 'gray.500',
};

export const description: SxProps<Theme> = {
  mt: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
};
