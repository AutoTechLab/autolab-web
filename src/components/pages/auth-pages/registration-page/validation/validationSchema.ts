import { isDate, parse } from 'date-fns';
import * as yup from 'yup';

const ENG_REGEX = 'a-zA-Z';
const NUM_REGEX = '0-9';

export const validationSchema = yup.object({
  username: yup
    .string()
    .matches(
      new RegExp(`^[${ENG_REGEX}${NUM_REGEX}_]{2,40}$`),
      'Юзернейм повинен містити тільки латинські літери та цифри',
    )
    .required("Це обов'якове поле для вводу")
    .min(2, 'Юзернейм занадто короткий')
    .max(40, 'Юзернейм занадто довгий'),
  email: yup
    .string()
    .email('Пошта повинна бути валідною')
    .required("Це обов'якове поле для вводу"),
  phone: yup.string().required("Це обов'якове поле для вводу"),
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
  firstname: yup
    .string()
    .min(2, "Ім'я занадто коротке")
    .max(40, "Ім'я занадто довге")
    .required("Це обов'якове поле для вводу"),
  lastname: yup
    .string()
    .min(2, 'Прізвище занадто коротке')
    .max(40, 'Прізвище занадто довге')
    .required("Це обов'якове поле для вводу"),
  middlename: yup
    .string()
    .min(2, 'По батькові занадто коротке')
    .max(40, 'По батькові занадто довге'),
  birthDate: yup
    .date()
    .transform(function parseDateString(value, originalValue) {
      return isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd/MM/yyyy', new Date());
    })
    .required("Це обов'якове поле для вводу"),
  agreement: yup.boolean().default(false).isTrue(),
});
