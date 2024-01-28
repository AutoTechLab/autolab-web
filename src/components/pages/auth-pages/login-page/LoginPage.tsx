'use client';

import { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';
import SideSection from '@/components/pages/auth-pages/components/side-section';
import useUser from '@/hooks/useUser';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import storageUtil from '@/lib/utils/storageUtil';

import { initialValues } from './constants/initialValues';
import * as styles from './LoginPage.styles';

const LoginPage: FC = () => {
  const router = useRouter();
  const { user } = useUser();
  const formik = useFormik({
    initialValues,
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
        <Typography
          sx={{ typography: 'h4Bold', color: 'white.main', mb: '24px' }}
        >
          Вхід
        </Typography>
        <TextField
          name="username"
          id="username"
          label="Логін"
          placeholder="Пошта / нікнейм / номер телефону"
          color={TextFieldColor.BLACK}
          inputProps={{ sx: styles.input }}
          sx={styles.textField}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.errors.username}
        />
        <TextField
          password
          name="password"
          id="password"
          label="Пароль"
          placeholder="Пароль"
          color={TextFieldColor.BLACK}
          sx={styles.textField}
          value={formik.values.password}
          inputProps={{ sx: styles.input }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        />
        <Link href={'/login/recover'}>Забув пароль?</Link>
        <Button
          color={ButtonColor.PRIMARY}
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.CONTAINED}
          icon={ButtonIcon.NONE}
          fullWidth
          type="submit"
        >
          Увійти
        </Button>
      </form>
      <Box component="section">
        <SideSection text="login" link="/register" />
      </Box>
    </Box>
  );
};

export default LoginPage;