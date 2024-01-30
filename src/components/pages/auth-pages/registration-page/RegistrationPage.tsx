'use client';

import { FC, useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

import SideSection from '@/components/pages/auth-pages/components/side-section';
import StepOne from '@/components/pages/auth-pages/registration-page/steps/StepOne';
import StepTwo from '@/components/pages/auth-pages/registration-page/steps/StepTwo';
import AuthAPI from '@/lib/api/auth/AuthAPI';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './RegistrationPage.styles';

const RegistrationPage: FC = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values) {
      try {
        const { agreement, confirmPassword, ...rest } = values;
        await AuthAPI.register(rest);
        router.push('/register/confirm');
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return e.response?.data;
        }
      }
    },
  });

  const handleChangeStep = () => {
    if (step) {
      setStep(0);
    } else {
      setStep(1);
    }
  };

  const steps = [
    <StepOne key={1} formik={formik} handleChangeStep={handleChangeStep} />,
    <StepTwo key={2} formik={formik} handleChangeStep={handleChangeStep} />,
  ];

  return (
    <Box sx={styles.wrapper}>
      <Box component="section">
        <SideSection text="register" link="/login" />
      </Box>
      <form onSubmit={formik.handleSubmit}>{steps[step]}</form>
    </Box>
  );
};

export default RegistrationPage;
