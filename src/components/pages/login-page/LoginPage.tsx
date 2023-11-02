'use client';

import { FC, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

import useUser from '@/hooks/useUser';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import storageUtil from '@/lib/utils/storageUtil';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './LoginPage.styles';

const LoginPage: FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { accessToken } = await AuthAPI.login(values);
        storageUtil.setToken(accessToken);
        return;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.log(e.response?.data);
        }
      }
    },
  });

  useEffect(() => {
    if (user) {
      router.replace('/profile');
    }
  }, [user]);

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
