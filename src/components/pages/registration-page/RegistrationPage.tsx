import { FC, FormEvent } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { initialValues } from './constants/initialValues';
import { validationSchema } from './validation/validationSchema';
import * as styles from './RegistrationPage.styles';

interface RegistrationPageProps {
  prop: string;
}

const RegistrationPage: FC<RegistrationPageProps> = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          type="text"
          name="username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
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
          type="number"
          name="age"
          id="age"
          value={formik.values.age}
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
