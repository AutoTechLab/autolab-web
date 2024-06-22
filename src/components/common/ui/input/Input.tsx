'use client';

import React, { FC, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  InputProps as InputPropsMUI,
  Typography,
} from '@mui/material';
import { Input as InputMUI } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import { InputVariant } from '@/components/common/ui/input/types';
import mergeSx from '@/lib/utils/mergeSx';
import theme from '@/styles/theme';

import * as styles from './Input.styles';

interface InputProps extends InputPropsMUI {
  variant?: InputVariant;
  helperText?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  password?: boolean;
  sx?: SxProps<Theme>;
}

const Input: FC<InputProps> = ({
  variant = 'white',
  helperText,
  label,
  disabled = false,
  error = false,
  password = false,
  sx = {},
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(!password);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const endAdornment = password ? (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        onClick={handleTogglePasswordVisibility}
        aria-label="toggle password visibility"
      >
        {showPassword ? (
          <EyeIcon width={24} height={24} color={theme.palette.gray[300]} />
        ) : (
          <EyeSlashIcon
            width={24}
            height={24}
            color={theme.palette.gray[300]}
          />
        )}
      </IconButton>
    </InputAdornment>
  ) : undefined;

  return (
    <FormControl
      disabled={disabled}
      error={error}
      sx={styles.formControl(variant)}
    >
      {label && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <InputLabel color="dark" sx={styles.label(variant)} shrink>
          {label}
        </InputLabel>
      )}
      <InputMUI
        type={showPassword ? 'text' : 'password'}
        sx={mergeSx(styles.input(variant), sx)}
        disableUnderline
        endAdornment={endAdornment}
        {...props}
      />
      {helperText && (
        <Typography sx={styles.helperText(variant, error)} typography="body3">
          {helperText}
        </Typography>
      )}
    </FormControl>
  );
};

export default Input;
