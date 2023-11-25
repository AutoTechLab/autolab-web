'use client';

import React, { FC, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';
import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './TextField.styles';

type InputProps = {
  sx?: SxProps<Theme>;
  color?: TextFieldColor;
  password?: boolean;
} & Omit<MuiTextFieldProps, 'sx' | 'color' | 'password'>;

const TextField: FC<InputProps> = ({
  sx = {},
  color = TextFieldColor.WHITE,
  password = false,
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
          <EyeIcon width={24} height={24} />
        ) : (
          <EyeSlashIcon width={24} height={24} />
        )}
      </IconButton>
    </InputAdornment>
  ) : undefined;

  return (
    <MuiTextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputLabelProps={{ shrink: true }}
      sx={mergeSx(styles.textField(color), sx)}
      InputProps={{
        endAdornment,
      }}
    />
  );
};

export default TextField;
