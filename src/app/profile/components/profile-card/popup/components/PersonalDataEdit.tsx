import { ChangeEvent, FC, useState } from 'react';
import { Stack } from '@mui/material';

import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import useToast from '@/hooks/use-toast';
import { UserBody } from '@/lib/api/user/types/UserBody';
import getDate from '@/lib/utils/getDate';

const PersonalDataEdit: FC = () => {
  const toast = useToast();
  const { user } = useAuthContext();
  const [data, setData] = useState(user);

  const handleClick = () => {
    setData({
      ...data,
      birthDate: new Date(data!.birthDate).toISOString(),
    } as UserBody);
    toast.success('Дані успішно збережені', '', 3000);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value } as UserBody);
    console.log(data);
  };

  return (
    <Stack flexDirection="column" gap="16px">
      <Input
        label="Ім'я"
        variant="white"
        value={data?.firstname}
        name="firstname"
        onChange={onChange}
      />
      <Input
        label="Прізвище"
        variant="white"
        value={data?.lastname}
        name="lastname"
        onChange={onChange}
      />
      <Input
        label="По батькові"
        variant="white"
        value={data?.middlename}
        name="middlename"
        onChange={onChange}
      />
      <Input
        label="Дата народження"
        variant="white"
        value={getDate(data?.birthDate as string)}
        name="birthDate"
        onChange={onChange}
      />
      <Input
        label="Телефон"
        variant="white"
        value={data?.phone}
        name="phone"
        onChange={onChange}
      />
      <Button sx={{ alignSelf: 'flex-end' }} size="small" onClick={handleClick}>
        Зберегти
      </Button>
    </Stack>
  );
};

export default PersonalDataEdit;
