export interface RegisterBody {
  username: string;
  email: string;
  phone: string;
  password: string;
  firstname: string;
  lastname: string;
  middlename: string;
  birthDate: string;
}

export interface RegisterInitialValues extends RegisterBody {
  confirmPassword: string;
  agreement: boolean;
}
