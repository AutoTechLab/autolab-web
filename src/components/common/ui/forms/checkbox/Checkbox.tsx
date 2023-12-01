'use client';

import { FC } from 'react';
import {
  Checkbox as CheckboxMui,
  CheckboxProps as CheckboxPropsMUI,
  FormControlLabel,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './Checkbox.styles';

interface CheckboxProps extends CheckboxPropsMUI {
  label?: string;
  sx?: SxProps<Theme>;
  color?: 'primary' | 'error';
  variant?: 'black' | 'white';
}

const Checkbox: FC<CheckboxProps> = ({
  label = '',
  sx = {},
  color = 'primary',
  variant = 'white',
  ...props
}) => {
  return (
    <FormControlLabel
      sx={styles.label(variant)}
      control={
        <CheckboxMui
          sx={mergeSx(styles.checkbox, sx)}
          color={color}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
