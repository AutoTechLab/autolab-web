import { FC } from 'react';
import { Box } from '@mui/material';
import { FormikValues, useFormik } from 'formik';

import TextField from '@/components/common/ui/forms/text-field';

interface StepOneProps {
  formik: ReturnType<typeof useFormik<FormikValues>>;
}

const StepOne: FC<StepOneProps> = ({ formik }) => {
  return (
    <Box>
      <TextField
        type="text"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.errors.email as string}
      />
      <TextField
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextField
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextField
        type="password"
        name="confirmPassword"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
    </Box>
  );
};

export default StepOne;
