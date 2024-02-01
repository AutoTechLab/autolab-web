import { FC } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import Checkbox from '@/components/common/ui/forms/checkbox';
import TextField from '@/components/common/ui/forms/text-field';
import { RegisterInitialValues } from '@/lib/api/auth/types/RegisterBody';

import * as styles from '../RegistrationPage.styles';

interface StepTwoProps {
  formik: ReturnType<typeof useFormik<RegisterInitialValues>>;
  handleChangeStep: () => void;
}

const StepTwo: FC<StepTwoProps> = ({ formik, handleChangeStep }) => {
  return (
    <Box sx={styles.stepWrapper}>
      <IconButton sx={{ alignSelf: 'flex-start' }} onClick={handleChangeStep}>
        <ChevronLeftIcon width={24} height={24} color="white" />
      </IconButton>
      <Typography sx={styles.title}>Реєстрація</Typography>
      <Typography sx={styles.subtitle}>
        Крок 2: Персональна інформація
      </Typography>
      <TextField
        type="text"
        name="firstname"
        label="Ім'я"
        placeholder="Ім'я"
        sx={styles.textField}
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.errors.firstname as string}
      />
      <TextField
        type="text"
        name="lastname"
        label="Прізвище"
        placeholder="Прізвище"
        sx={styles.textField}
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.errors.lastname as string}
      />
      <TextField
        type="text"
        name="middlename"
        label="По батькові"
        placeholder="По батькові"
        sx={styles.textField}
        value={formik.values.middlename}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.middlename && Boolean(formik.errors.middlename)}
        helperText={formik.errors.middlename as string}
      />
      <TextField
        type="text"
        name="phone"
        label="Телефон"
        placeholder="+380 66 0000 000"
        sx={styles.textField}
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.errors.phone as string}
      />
      <TextField
        type="text"
        name="birthDate"
        label="Дата народження"
        placeholder="17/11/2004"
        sx={styles.textField}
        value={formik.values.birthDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
        helperText={formik.errors.birthDate as string}
      />
      <Checkbox
        label="Погоджуюсь на обробку персональних даних"
        onChange={formik.handleChange}
        name="agreement"
      />
      <Button
        color={ButtonColor.PRIMARY}
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.CONTAINED}
        icon={ButtonIcon.NONE}
        sx={styles.button}
        type="submit"
        disabled={!formik.isValid}
        fullWidth
      >
        Зареєструватись
      </Button>
    </Box>
  );
};

export default StepTwo;
