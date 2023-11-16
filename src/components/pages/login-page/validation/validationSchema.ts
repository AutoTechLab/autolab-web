import * as yup from 'yup';

export const validationSchema = yup.object({
  username: yup.string().min(5).max(20).required(),
  password: yup.string().required('Password is required'),
});
