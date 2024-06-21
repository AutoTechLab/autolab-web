import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  InputProps as InputPropsMUI,
  Typography,
} from '@mui/material';
import { Input as InputMUI } from '@mui/material';

import { InputVariant } from '@/components/common/ui/input/types';

import * as styles from './Input.styles';

interface InputProps extends InputPropsMUI {
  variant?: InputVariant;
  helperText?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
}

const Input: FC<InputProps> = ({
  variant = 'white',
  helperText,
  label,
  disabled = false,
  error = false,
  ...props
}) => {
  return (
    <FormControl
      disabled={disabled}
      error={error}
      sx={styles.formControl(variant)}
    >
      {label && (
        <InputLabel sx={styles.label} shrink>
          {label}
        </InputLabel>
      )}
      <InputMUI sx={styles.input} disableUnderline {...props} />
      {helperText && (
        <Typography sx={styles.helperText(variant, error)} typography="body3">
          {helperText}
        </Typography>
      )}
    </FormControl>
  );
};

export default Input;
