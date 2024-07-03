import { ChangeEvent, FC, useState } from 'react';
import { Stack } from '@mui/material';

import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
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

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
    console.log(passwords);
  };

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
      <Input
        label="Поточний пароль"
        variant="white"
        name="oldPassword"
        onChange={handlePasswordChange}
      />
      <Input
        label="Новий пароль"
        variant="white"
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
