import { FC } from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './TextField.styles';

const TextField: FC<TextFieldProps> = ({ value, sx, ...props }) => {
  return (
    <>
      {sx ? (
        <TextFieldMUI value={value} sx={mergeSx(styles.input, sx)} {...props} />
      ) : (
        <TextFieldMUI value={value} sx={styles.input} {...props} />
      )}
    </>
  );
};

export default TextField;
