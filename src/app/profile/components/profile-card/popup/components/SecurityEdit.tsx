import { ChangeEvent, FC, useState } from 'react';
import { Stack } from '@mui/material';

import Button from '@/components/common/ui/button';
import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';

const SecurityEdit: FC = () => {
  const toast = useToast();
  const { user } = useAuthContext();
  const [data, setData] = useState(user);
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const handleSubmit = () => {
    if (passwords.oldPassword !== '') {
      try {
        AuthAPI.changePassword(passwords.oldPassword, passwords.newPassword);
        toast.success('Пароль успішно змінено', '', 3000);
      } catch (e) {
        toast.error('Помилка зміни паролю', '', 3000);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
    console.log(passwords);
  };

  return (
    <Stack flexDirection="column" gap="35px">
      <TextField
        label="Нікнейм"
        color={TextFieldColor.BLACK}
        value={data?.username}
        name="username"
        onChange={handleChange}
      />
      <TextField
        label="Пошта"
        color={TextFieldColor.BLACK}
        value={data?.email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        label="Поточний пароль"
        color={TextFieldColor.BLACK}
        name="oldPassword"
        onChange={handlePasswordChange}
      />
      <TextField
        label="Новий пароль"
        color={TextFieldColor.BLACK}
        name="newPassword"
        onChange={handlePasswordChange}
      />
      <Button
        sx={{ alignSelf: 'flex-end' }}
        size="small"
        onSubmit={handleSubmit}
      >
        Зберегти
      </Button>
    </Stack>
  );
};

export default SecurityEdit;
