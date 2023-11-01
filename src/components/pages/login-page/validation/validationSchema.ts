import * as yup from 'yup';

export const validationSchema = yup.object({
  username: yup.string().min(5).max(20).required(),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
