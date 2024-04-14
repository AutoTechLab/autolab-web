'use client';
import { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import useToast from '@/hooks/use-toast/useToast';
import AuthAPI from '@/lib/api/auth/AuthAPI';
import storageUtil from '@/lib/utils/storageUtil';
import { LogoVariant } from '@/types/logo';

import * as styles from './ConfirmationFinishPage.styles';

interface ConfirmationFinishPageProps {
  token: string;
}

const ConfirmationFinishPage: FC<ConfirmationFinishPageProps> = ({ token }) => {
  const toast = useToast();

  const approveEmail = async () => {
    try {
      const { accessToken } = await AuthAPI.approveEmail(token);
      storageUtil.setToken(accessToken);
    } catch (e) {
      toast.error('Помилка', 'Лист підтвердження недійсний', 3000, 'filled');
    }
  };

  useEffect(() => {
    approveEmail();
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Logo size={LogoVariant.LARGE} />
      <Typography sx={{ mt: '20px' }} typography="logoMedium">
        AUTOLAB
      </Typography>
      <Typography sx={{ mt: '28px' }} typography="h3Bold">
        Акаунт успішно створено!
      </Typography>
      <Typography sx={styles.info} typography="h5">
        Тепер ти можеш розпочати разом з AutoLab ефективне управління вашим СТО!
      </Typography>
      <Button
        href="/profile"
        sx={styles.button}
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.CONTAINED}
        icon={ButtonIcon.NONE}
        color={ButtonColor.PRIMARY}
      >
        Перейти до профілю
      </Button>
    </Box>
  );
};

export default ConfirmationFinishPage;
