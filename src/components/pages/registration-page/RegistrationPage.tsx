'use client';

import { FC } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';

import AuthAPI from '@/lib/api/auth/AuthAPI';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './RegistrationPage.styles';

interface RegistrationPageProps {
  prop: string;
}

const RegistrationPage: FC<RegistrationPageProps> = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values) {
      try {
        await AuthAPI.register(values);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return e.response?.data;
        }
      }
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
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        />
        <TextField
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="text"
          name="phone"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="text"
          name="firstname"
          id="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="text"
          name="lastname"
          id="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="text"
          name="middlename"
          id="middlename"
          value={formik.values.middlename}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="text"
          name="birthDate"
          id="birthDate"
          value={formik.values.birthDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <Button color="primary" variant="contained" type="submit">
          Зареєструватись
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationPage;
