import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import TextField from '@/components/common/ui/forms/text-field';
import { RegisterInitialValues } from '@/lib/api/auth/types/RegisterBody';

import * as styles from '../RegistrationPage.styles';

interface StepOneProps {
  formik: ReturnType<typeof useFormik<RegisterInitialValues>>;
  handleChangeStep: () => void;
}

const StepOne: FC<StepOneProps> = ({ formik, handleChangeStep }) => {
  return (
    <Box sx={styles.stepWrapper}>
      <Typography sx={styles.title}>Реєстрація</Typography>
      <Typography sx={styles.subtitle}>Крок 1: Контактна інформація</Typography>
      <TextField
        type="text"
        name="username"
        label="Нікнейм"
        placeholder="nickname"
        sx={styles.textField}
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.errors.username as string}
      />
      <TextField
        type="email"
        name="email"
        label="Пошта"
        placeholder="you@domain.com"
        sx={styles.textField}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.errors.email as string}
      />
      <TextField
        type="password"
        name="password"
        label="Пароль"
        placeholder="Пароль"
        sx={styles.textField}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.errors.password as string}
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Повторити пароль"
        placeholder="Пароль"
        sx={styles.textField}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={formik.errors.confirmPassword as string}
      />
      <Button
        color={ButtonColor.PRIMARY}
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.CONTAINED}
        icon={ButtonIcon.NONE}
        sx={styles.button}
        onClick={handleChangeStep}
        fullWidth
      >
        Далі
      </Button>
    </Box>
  );
};

export default StepOne;
