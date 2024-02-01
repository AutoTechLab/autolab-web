import { RegisterInitialValues } from '@/lib/api/auth/types/RegisterBody';

export const initialValues: RegisterInitialValues = {
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  middlename: '',
  birthDate: '',
  agreement: false,
};
