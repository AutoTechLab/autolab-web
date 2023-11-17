import { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { ButtonProps as ButtonPropsMUI } from '@mui/material';
import { Button as ButtonMUI } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './Button.styles';
import { ButtonColor, ButtonIcon, ButtonSize, ButtonVariant } from './types';

interface ButtonProps extends ButtonPropsMUI {
  size: ButtonSize;
  variant: ButtonVariant;
  color: ButtonColor;
  icon: ButtonIcon;
}

const Button: FC<ButtonProps> = ({
  size,
  variant,
  color,
  icon,
  sx,
  children,
  ...rest
}) => {
  return (
    <>
      {sx ? (
        <ButtonMUI
          sx={mergeSx(styles.button(variant, size, color), sx)}
          {...rest}
        >
          {icon === ButtonIcon.LEFT && <PlusIcon />}
          {children}
          {icon === ButtonIcon.RIGHT && <PlusIcon />}
        </ButtonMUI>
      ) : (
        <ButtonMUI sx={styles.button(variant, size, color)} {...rest}>
          {icon === ButtonIcon.LEFT && <PlusIcon />}
          {children}
          {icon === ButtonIcon.RIGHT && <PlusIcon />}
        </ButtonMUI>
      )}
    </>
  );
};

export default Button;
