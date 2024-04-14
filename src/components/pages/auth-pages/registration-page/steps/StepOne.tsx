import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';

import ArrowLink from '@/components/common/ui/arrow-link';
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
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
      <Stack flexDirection="column" gap="16px">
        <Input
          type="text"
          name="username"
          label="Нікнейм"
          placeholder="nickname"
          variant="black"
          sx={styles.textField}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.errors.username as string}
        />
        <Input
          type="email"
          name="email"
          label="Пошта"
          placeholder="you@domain.com"
          variant="black"
          sx={styles.textField}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.errors.email as string}
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.errors.password as string}
        />
        <Input
          password
          name="confirmPassword"
          label="Повторити пароль"
          placeholder="Пароль"
          variant="black"
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
      </Stack>
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
      <ArrowLink sx={styles.arrowLink} text="Повернутись на головну" href="/" />
    </Box>
  );
};

export default StepOne;
