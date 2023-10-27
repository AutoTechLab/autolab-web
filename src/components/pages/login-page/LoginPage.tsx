'use client';

import { FC } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './LoginPage.styles';

interface RegistrationPageProps {
  prop: string;
}

const LoginPage: FC<RegistrationPageProps> = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const credentials = {
        username: values.username,
        password: values.password,
      };
      await signIn('login', credentials);
    },
  });

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.errors.username}
        />
        <TextField
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <Button color="primary" variant="contained" type="submit">
          Увійти
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
