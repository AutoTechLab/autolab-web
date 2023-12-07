import * as yup from 'yup';

export const validationSchema = yup.object({
  username: yup.string().min(5).max(20).required(),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup.string().max(20).required(),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  firstname: yup.string().max(20).required(),
  lastname: yup.string().max(20).required(),
  middlename: yup.string().max(20),
  birthDate: yup.string().max(20).required(),
});
