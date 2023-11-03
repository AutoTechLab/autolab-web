import { FC } from 'react';
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

import { initialValues } from './constants/initialValues';
import * as styles from './SupportForm.styles';

const SupportForm: FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.form}>
        <TextField
          type="text"
          name="email"
          placeholder="you@domain.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <FormControl margin="none">
          <OutlinedInput
            multiline
            type="text"
            name="message"
            color="warning"
            placeholder="Опишіть свою проблему"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
          />
        </FormControl>
        <Button color="primary" variant="contained" type="submit">
          Увійти
        </Button>
      </Box>
    </form>
  );
};

export default SupportForm;
