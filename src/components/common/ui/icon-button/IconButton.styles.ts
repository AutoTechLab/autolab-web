import { SxProps, Theme } from '@mui/material/styles';

import {
  ButtonColors,
  IconButtonSize,
  IconButtonVariant,
} from '@/components/common/ui/icon-button/types';

const buttonColour: ButtonColors = {
  contained: {
    default: {
      color: 'orange.300',
      border: 'orange.300',
    },
    hover: {
      color: 'orange.200',
      border: 'orange.200',
    },
    active: {
      color: 'orange.400',
      border: 'orange.400',
    },
    focused: {
      color: 'orange.300',
      border: 'orange.100',
    },
    disabled: {
      color: 'gray.200',
      border: 'gray.200',
    },
  },
  outlined: {
    default: {
      color: 'transparent',
      border: 'orange.300',
    },
    hover: {
      color: 'rgba(255, 84, 30, 0.15)',
      border: 'orange.300',
    },
    active: {
      color: 'rgba(255, 84, 30, 0.50)',
      border: 'orange.300',
    },
    focused: {
      color: 'rgba(255, 84, 30, 0.30)',
      border: 'orange.300',
    },
    disabled: {
      color: 'transparent',
      border: 'gray.200',
    },
  },
};

export const button = (
  size: IconButtonSize,
  variant: IconButtonVariant,
): SxProps<Theme> => ({
  borderRadius: '6px',
  border: '2px solid',
  p: 0,
  width: size === 'small' ? '36px' : '48px',
  height: size === 'small' ? '36px' : '48px',

  backgroundColor: buttonColour[variant].default.color,
  borderColor: buttonColour[variant].default.border,
  '&:hover': {
    backgroundColor: buttonColour[variant].hover.color,
    borderColor: buttonColour[variant].hover.border,
  },
  '&:active': {
    backgroundColor: buttonColour[variant].active.color,
    borderColor: buttonColour[variant].active.border,
  },
  '&:focus': {
    backgroundColor: buttonColour[variant].focused.color,
    borderColor: buttonColour[variant].focused.border,
  },
  '&:disabled': {
    backgroundColor: buttonColour[variant].disabled.color,
    borderColor: buttonColour[variant].disabled.border,
    svg: {
      stroke: variant === 'contained' ? 'white' : '#949394',
    },
  },

  svg: {
    width: '24px',
    height: '24px',
    stroke: variant === 'contained' ? 'white' : 'black',
  },
});
