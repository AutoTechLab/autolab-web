'use client';

import { FC, useState } from 'react';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import ArrowLink from '@/components/common/ui/arrow-link';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';

import * as styles from './PasswordRecoverPage.styles';

const PasswordRecoverPage: FC = () => {
  const [email, setEmail] = useState('');

  const handleClick = () => {
    try {
      // TODO: send email to server
    } catch (e) {
      console.error(e);
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
        <TextField
          sx={styles.textField}
          fullWidth
          value={email}
          label="Пошта"
          placeholder="Введіть пошту"
          color={TextFieldColor.BLACK}
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
          Надіслати повторно
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
