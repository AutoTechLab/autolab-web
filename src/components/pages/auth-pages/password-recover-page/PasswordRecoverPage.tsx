'use client';

import { FC, useState } from 'react';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/components/common/icons/Logo';
import ArrowLink from '@/components/common/ui/arrow-link';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import Input from '@/components/common/ui/input/Input';
import useToast from '@/hooks/use-toast';
import AuthAPI from '@/lib/api/auth/AuthAPI';

import * as styles from './PasswordRecoverPage.styles';

const PasswordRecoverPage: FC = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleClick = () => {
    try {
      AuthAPI.requestResetPassword(email);
      router.push('/login/recover/check');
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        toast.error(
          'Помилка при відправці листа',
          'Такої пошти не існує',
          3000,
        );
      }
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Link href="/">
        <Stack flexDirection="row" alignSelf="flex-start" gap="10px">
          <Logo />
          <Typography typography="logoSmall">AUTOLAB</Typography>
        </Stack>
      </Link>
      <Stack sx={styles.info}>
        <HandRaisedIcon width={40} height={40} />
        <Typography typography="h3Medium" sx={styles.check}>
          Забув пароль?
        </Typography>
        <Typography sx={styles.explanation}>
          На вказану пошту буде надіслано лист для зміни паролю
        </Typography>
        <Input
          sx={styles.textField}
          fullWidth
          value={email}
          label="Пошта"
          placeholder="Введіть пошту"
          variant="black"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          color={ButtonColor.PRIMARY}
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.CONTAINED}
          icon={ButtonIcon.NONE}
          fullWidth
          onClick={() => handleClick()}
        >
          Надіслати
        </Button>
        <ArrowLink
          sx={styles.arrowLink}
          text="Повернутись до авторизації"
          href="/login"
        />
      </Stack>
    </Box>
  );
};

export default PasswordRecoverPage;
