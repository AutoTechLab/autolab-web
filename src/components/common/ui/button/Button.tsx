import { FC, ReactNode } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { ButtonProps as ButtonPropsMUI } from '@mui/material';
import { Button as ButtonMUI } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './Button.styles';
import { ButtonColor, ButtonIcon, ButtonSize, ButtonVariant } from './types';

interface ButtonProps extends ButtonPropsMUI {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: ButtonIcon;
  iconComponent?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  size = 'medium',
  variant = 'contained',
  color = 'primary',
  icon = 'none',
  iconComponent = <PlusIcon />,
  sx = {},
  children,
  ...rest
}) => {
  return (
    <ButtonMUI
      sx={mergeSx(styles.button(variant, size, color), sx)}
      disableRipple
      {...rest}
    >
      {icon === 'left' && iconComponent}
      {children}
      {icon === 'right' && iconComponent}
    </ButtonMUI>
  );
};

export default Button;
