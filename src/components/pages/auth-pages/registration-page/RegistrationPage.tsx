'use client';

import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';

import TextField from '@/components/common/ui/forms/text-field';
import SideSection from '@/components/pages/auth-pages/components/side-section';
import StepOne from '@/components/pages/auth-pages/registration-page/steps/StepOne';
import StepTwo from '@/components/pages/auth-pages/registration-page/steps/StepTwo';
import AuthAPI from '@/lib/api/auth/AuthAPI';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './RegistrationPage.styles';

const RegistrationPage: FC = () => {
  const [step, setStep] = useState(0);
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

  const steps = [];

  return (
    <Box sx={styles.wrapper}>
      <Box component="section">
        <SideSection text="register" link="/register" />
      </Box>
      <form onSubmit={formik.handleSubmit}>
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
