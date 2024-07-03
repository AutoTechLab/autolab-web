import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import {
  ProfileCardContext,
  ProfileCardContextProps,
} from '@/app/profile/components/profile-card/ProfileCard';
import Button from '@/components/common/ui/button';
import Input from '@/components/common/ui/input/Input';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import useToast from '@/hooks/use-toast';
import { UserBody, UserInfo } from '@/lib/api/user/types/UserBody';
import UserAPI from '@/lib/api/user/UserAPI';
import getDate from '@/lib/utils/getDate';

const PersonalDataEdit: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const { user } = useAuthContext();
  const [data, setData] = useState(user);
  const { handleClick } = useContext(
    ProfileCardContext,
  ) as ProfileCardContextProps;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({
      ...data,
      birthDate: new Date(data!.birthDate).toISOString(),
    } as UserBody);
    try {
      await UserAPI.changePersonalInfo(data as UserInfo);
      toast.success('Дані успішно збережені', '', 3000);
      router.refresh();
      handleClick();
    } catch (e) {
      if (isAxiosError(e)) {
        toast.error('Помилка зміни даних', e.message, 3000);
      }
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value } as UserBody);
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      onSubmit={(e) => onSubmit(e)}
    >
      <Input
        label="Нікнейм"
        variant="white"
        value={data?.username}
        name="username"
        onChange={onChange}
      />
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
      <Button sx={{ alignSelf: 'flex-end' }} size="small" type="submit">
        Зберегти
      </Button>
    </form>
  );
};

export default PersonalDataEdit;
