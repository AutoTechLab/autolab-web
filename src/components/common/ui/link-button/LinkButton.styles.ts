import { SxProps, Theme } from '@mui/material/styles';

import { LinkButtonPlace } from '@/components/common/ui/link-button/types';

export const linkButton = (place: LinkButtonPlace): SxProps<Theme> => ({
  typography: 'body1',
  borderRadius: '6px',
  textTransform: 'none',
  border: '2px solid transparent',
  ...(place === LinkButtonPlace.HEADER && {
    color: 'black.main',
    p: '12px 24px',
    '&:hover': {
      color: 'orange.400',
      backgroundColor: 'transparent',
    },
    '&:active': {
      textDecoration: 'underline',
      'text-underline-offset': '2px',
    },
    '&:focus': {
      border: '2px solid',
      borderColor: 'orange.800',
    },
    '&:disabled': {
      color: 'gray.200',
    },
  }),
  ...(place === LinkButtonPlace.FOOTER && {
    color: 'white.main',
    p: '8px 16px',
    border: '2px solid transparent',
    '&:hover': {
      color: 'orange.500',
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: 'orange.500',
      borderColor: 'transparent',
    },
    '&:focus': {
      color: 'white.main',
      borderColor: 'orange.600',
    },
    '&:disabled': {
      color: 'gray.400',
    },
  }),
});
