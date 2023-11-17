import type { SxProps, Theme } from '@mui/material/styles';

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';

const containedColors: SxProps<Theme> = {
  color: 'white.main',
  backgroundColor: 'orange.300',
  border: '2px solid',
  borderColor: 'orange.300',
  '&:hover': {
    backgroundColor: 'orange.200',
    borderColor: 'orange.200',
  },
  '&:active': {
    backgroundColor: 'orange.400',
    borderColor: 'orange.400',
  },
  '&:focus': {
    backgroundColor: 'orange.300',
    borderColor: 'orange.100',
  },
  '&:disabled': {
    color: 'white.main',
    backgroundColor: 'gray.200',
    borderColor: 'gray.200',
  },
};

const outlinedOrangeColors: SxProps<Theme> = {
  color: 'black.main',
  border: '2px solid',
  borderColor: 'orange.300',
  '&:hover': {
    backgroundColor: 'orange.900',
    borderColor: 'orange.200',
  },
  '&:active': {
    backgroundColor: 'orange.900',
    borderColor: 'orange.400',
  },
  '&:focus': {
    backgroundColor: 'orange.900',
    borderColor: 'orange.300',
  },
  '&:disabled': {
    color: 'gray.200',
    borderColor: 'gray.200',
  },
};

const outlinedWhiteColors: SxProps<Theme> = {
  color: 'white.main',
  border: '2px solid',
  borderColor: 'orange.700',
  '&:hover': {
    borderColor: 'orange.800',
  },
  '&:active': {
    backgroundColor: 'orange.800',
    borderColor: 'orange.900',
  },
  '&:focus': {
    backgroundColor: 'orange.900',
    borderColor: 'orange.700',
  },
  '&:disabled': {
    color: 'gray.200',
    borderColor: 'gray.200',
  },
};

export const button = (
  variant: ButtonVariant,
  size: ButtonSize,
  color: ButtonColor,
): SxProps<Theme> => ({
  svg: {
    width: '20px',
    height: '20px',
  },
  borderRadius: '6px' as string,

  textTransform: 'none',
  display: 'flex',
  ...(variant === ButtonVariant.CONTAINED && {
    ...containedColors,
    ...(size === ButtonSize.SMALL && {
      typography: 'body1Bold',
      p: '10px 20px',
      gap: '8px',
    }),
    ...(size === ButtonSize.MEDIUM && {
      p: '12px 28px',
      typography: 'h6Bold',
      gap: '12px',
    }),
    ...(size === ButtonSize.LARGE && {
      p: '16px 32px',
      gap: '12px',
      typography: 'h6Bold',
    }),
  }),
  ...(variant === ButtonVariant.OUTLINED && {
    ...(color === ButtonColor.PRIMARY && {
      ...outlinedOrangeColors,
    }),
    ...(color === ButtonColor.SECONDARY && {
      ...outlinedWhiteColors,
    }),
    ...(size === ButtonSize.SMALL && {
      typography: 'body1Bold',
      p: '10px 20px',
      gap: '8px',
    }),
    ...(size === ButtonSize.MEDIUM && {
      p: '12px 28px',
      typography: 'h6Bold',
      gap: '12px',
    }),
    ...(size === ButtonSize.LARGE && {
      p: '16px 32px',
      gap: '12px',
      typography: 'h6Bold',
    }),
  }),
});
