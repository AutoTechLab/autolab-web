import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      'Пароль повинен містити літери та цифри',
    )
    .required("Це обов'якове поле для вводу"),
  confirmPassword: yup
    .string()
    .required("Це обов'якове поле для вводу")
    .oneOf([yup.ref('password')], 'Паролі повинні співпадати'),
});
