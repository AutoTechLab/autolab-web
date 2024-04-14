'use client';

import { FC } from 'react';
import { KeyIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';
import { initialValues } from '@/components/pages/auth-pages/password-change-page/constants';
import { validationSchema } from '@/components/pages/auth-pages/password-change-page/validation';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import StorageUtil from '@/lib/utils/storageUtil';

import * as styles from './PasswordChangePage.styles';

const PasswordChangePage: FC = () => {
  const token = usePathname().slice(15);
  const toast = useToast();
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { accessToken } = await AuthAPI.resetPassword(
          token,
          values.password,
        );
        StorageUtil.setToken(accessToken);
        router.replace('/login/recover/success');
      } catch (e) {
        toast.error('Помилка при зміні паролю', 'Спробуйте ще раз', 3000);
      }
    },
  });

  return (
    <Box sx={styles.wrapper}>
      <Link href="/">
        <Stack flexDirection="row" alignSelf="flex-start" gap="10px">
          <Logo />
          <Typography typography="logoSmall">AUTOLAB</Typography>
        </Stack>
      </Link>
      <Stack sx={styles.info}>
        <KeyIcon width={40} height={40} />
        <Typography typography="h3Medium" sx={styles.check}>
          Введи новий пароль
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            password
            fullWidth
            type="password"
            name="password"
            label="Пароль"
            placeholder="Пароль"
            sx={styles.textField}
            color={TextFieldColor.BLACK}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password as string}
          />
          <TextField
            password
            fullWidth
            type="password"
            name="confirmPassword"
            label="Повторити пароль"
            placeholder="Пароль"
            sx={styles.textField}
            color={TextFieldColor.BLACK}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={formik.errors.confirmPassword as string}
          />
          <Box sx={{ display: 'flex', gap: '16px', mt: '32px' }}>
            <Button
              sx={{ width: '204px' }}
              color={ButtonColor.SECONDARY}
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.OUTLINED}
              icon={ButtonIcon.NONE}
              onClick={() => router.replace('/login')}
            >
              Відмінити
            </Button>
            <Button
              type="submit"
              name="button"
              color={ButtonColor.PRIMARY}
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.CONTAINED}
              icon={ButtonIcon.NONE}
              sx={{ width: '260px' }}
              disabled={!(formik.dirty && formik.isValid)}
            >
              Змінити пароль
            </Button>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default PasswordChangePage;
