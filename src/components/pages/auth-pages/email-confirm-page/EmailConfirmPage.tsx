'use client';

import { FC } from 'react';
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import Logo from '@/components/common/icons/Logo';
import ArrowLink from '@/components/common/ui/arrow-link';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import useToast from '@/hooks/use-toast/useToast';
import AuthAPI from '@/lib/api/auth/AuthAPI';

import * as styles from './EmailConfirmPage.styles';

const EmailConfirmPage: FC = () => {
  const toast = useToast();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const resendEmail = () => {
    try {
      if (email) {
        AuthAPI.resendEmail(email);
        toast.success('Лист надіслано', 'Перевірте пошту', 3000, 'filled');
      } else {
        toast.error('Помилка', 'Пошту не вказано', 3000, 'filled');
      }
    } catch (e) {
      toast.error('Помилка', 'Щось пішло не так', 3000, 'filled');
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
        <EnvelopeIcon width={40} height={40} />
        <Typography typography="h3Medium" sx={styles.check}>
          Перевір пошту
        </Typography>
        <Typography sx={styles.explanation}>
          Було надіслано листа для підтвердження на адресу exapmle@gmail.com
        </Typography>
        <Box sx={styles.alert}>
          <ExclamationCircleIcon width={24} height={24} />
          <Typography typography="h6">
            Лист підтверження діє 1 годину
          </Typography>
        </Box>
        <Button
          color={ButtonColor.PRIMARY}
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.CONTAINED}
          icon={ButtonIcon.NONE}
          fullWidth
          onClick={resendEmail}
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

export default EmailConfirmPage;
