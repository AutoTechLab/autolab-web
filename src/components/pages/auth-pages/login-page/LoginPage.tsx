'use client';

import { FC } from 'react';
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
        router.replace('/profile');
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
        <TextField
          name="username"
          label="Логін"
          placeholder="Пошта / нікнейм / номер телефону"
          color={TextFieldColor.BLACK}
          inputProps={{ sx: styles.input }}
          sx={styles.textField}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          password
          name="password"
          label="Пароль"
          placeholder="Пароль"
          color={TextFieldColor.BLACK}
          sx={styles.textField}
          value={formik.values.password}
          inputProps={{ sx: styles.input }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
