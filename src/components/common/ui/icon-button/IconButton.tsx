import { FC, ReactNode } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  IconButton as IconButtonMUI,
  IconButtonOwnProps as IconButtonPropsMUI,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import {
  IconButtonSize,
  IconButtonVariant,
} from '@/components/common/ui/icon-button/types';
import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './IconButton.styles';

interface IconButtonProps extends IconButtonPropsMUI {
  children?: ReactNode;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  sx?: SxProps<Theme>;
}

const IconButton: FC<IconButtonProps> = ({
  children = <PlusIcon />,
  size = 'medium',
  variant = 'contained',
  sx = {},
  ...props
}) => {
  return (
    <IconButtonMUI
      disableRipple
      sx={mergeSx(styles.button(size, variant), sx)}
      {...props}
    >
      {children}
    </IconButtonMUI>
  );
};

export default IconButton;
