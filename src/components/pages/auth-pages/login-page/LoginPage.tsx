'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import ArrowLink from '@/components/common/ui/arrow-link';
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
import SideSection from '@/components/pages/auth-pages/components/side-section';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import { exceptionMapper } from '@/lib/utils/exception-mapper';
import storageUtil from '@/lib/utils/storageUtil';

import { initialValues } from './constants/initialValues';
import * as styles from './LoginPage.styles';

const LoginPage: FC = () => {
  const router = useRouter();
  const toast = useToast();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const { accessToken } = await AuthAPI.login(values);
        storageUtil.setToken(accessToken);
        router.replace('/profile?tab=organisations');
        return;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const { error } = e.response?.data;
          const mapper = exceptionMapper[error];
          toast.error(mapper.title, mapper.description, 3000, 'filled');
        }
      }
    },
  });

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Typography sx={styles.signInText}>Вхід</Typography>
        <Stack flexDirection="column" gap="24px" mb="18px">
          <Input
            name="username"
            label="Логін"
            placeholder="Пошта / нікнейм / номер телефону"
            variant="black"
            sx={styles.textField}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            password
            name="password"
            label="Пароль"
            placeholder="Пароль"
            variant="black"
            sx={styles.textField}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Stack>
        <Link href="/login/recover">Забув пароль?</Link>
        <Button
          color="primary"
          size="medium"
          variant="contained"
          fullWidth
          type="submit"
        >
          Увійти
        </Button>
        <ArrowLink
          sx={styles.arrowLink}
          text="Повернутись на головну"
          href="/"
        />
      </form>
      <Box component="section">
        <SideSection text="login" link="/register" />
      </Box>
    </Box>
  );
};

export default LoginPage;
