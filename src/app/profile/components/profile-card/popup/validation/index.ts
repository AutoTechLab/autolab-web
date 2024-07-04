import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      'Пароль повинен містити літери та цифри',
    )
    .required("Це обов'якове поле для вводу"),
  newPassword: yup
    .string()
    .required("Це обов'якове поле для вводу")
    .notOneOf([yup.ref('oldPassword')], 'Паролі не повинні співпадати'),
});
