import { FC, useState } from 'react';
import { Stack } from '@mui/material';
import { isAxiosError } from 'axios';
import { useFormik } from 'formik';

import { validationSchema } from '@/app/profile/components/profile-card/popup/validation';
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';

const SecurityEdit: FC = () => {
  const toast = useToast();
  const { user } = useAuthContext();
  const [data, setData] = useState(user);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await AuthAPI.changePassword(values);
        toast.success('Пароль успішно змінено', '', 3000);
      } catch (e) {
        if (isAxiosError(e)) {
          toast.error('Помилка зміни паролю', e.response!.data.message, 3000);
        }
      }
    },
  });

  return (
    <Stack flexDirection="column" gap="16px">
      <Input
        label="Телефон"
        variant="white"
        value={data?.phone}
        name="phone"
        disabled
      />
      <Input
        label="Пошта"
        variant="white"
        value={data?.email}
        name="email"
        disabled
      />
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        onSubmit={formik.handleSubmit}
      >
        <Input
          password
          name="oldPassword"
          label="Поточний пароль"
          placeholder="Пароль"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
          }
          helperText={formik.errors.oldPassword as string}
        />
        <Input
          password
          name="newPassword"
          label="Новий пароль"
          placeholder="Пароль"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.errors.newPassword as string}
        />
        <Button
          sx={{ alignSelf: 'flex-end' }}
          disabled={!(formik.dirty && formik.isValid)}
          type="submit"
          size="small"
        >
          Зберегти
        </Button>
      </form>
    </Stack>
  );
};

export default SecurityEdit;
