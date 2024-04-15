import { ChangeEvent, FC, useState } from 'react';
import { Stack } from '@mui/material';

import Button from '@/components/common/ui/button';
import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';
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
    <Stack flexDirection="column" gap="35px">
      <TextField
        label="Ім'я"
        color={TextFieldColor.BLACK}
        value={data?.firstname}
        name="firstname"
        onChange={onChange}
      />
      <TextField
        label="Прізвище"
        color={TextFieldColor.BLACK}
        value={data?.lastname}
        name="lastname"
        onChange={onChange}
      />
      <TextField
        label="По батькові"
        color={TextFieldColor.BLACK}
        value={data?.middlename}
        name="middlename"
        onChange={onChange}
      />
      <TextField
        label="Дата народження"
        color={TextFieldColor.BLACK}
        value={getDate(data?.birthDate as string)}
        name="birthDate"
        onChange={onChange}
      />
      <TextField
        label="Телефон"
        color={TextFieldColor.BLACK}
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
