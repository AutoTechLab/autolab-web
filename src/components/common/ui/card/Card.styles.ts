import { SxProps, Theme } from '@mui/material/styles';

const defaultTextSettings = {
  typography: 'body1',
  color: 'black',
};

export const wrapper: SxProps<Theme> = {
  width: '100%',

  display: 'block',
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
};

export const box: SxProps<Theme> = {
  flex: '1 1 auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const content: SxProps<Theme> = {
  p: {
    mobile: '12px 0 12px 20px',
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

export const heading: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '8px',
};

export const avatar: SxProps<Theme> = {
  width: '64px',
  height: '64px',
  border: '1px solid',
  borderColor: 'gray.500',
};

export const price: SxProps<Theme> = {
  typography: 'body1Bold',
  color: 'orange.100',
};

export const phone: SxProps<Theme> = defaultTextSettings;
export const auto: SxProps<Theme> = defaultTextSettings;

export const description: SxProps<Theme> = {
  mt: '14px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
};

export const button: SxProps<Theme> = {
  alignSelf: 'stretch',
  width: {
    mobile: '28px',
    tablet: '44px',
  },
  height: {
    mobile: 'auto',
    tablet: '44px',
  },
  borderRadius: {
    tablet: '50%',
    mobile: '0 6px 6px 0',
  },
  m: {
    mobile: 0,
    tablet: '22px 16px 0 0',
  },
  p: {
    mobile: '4px',
    tablet: 0,
  },
};
