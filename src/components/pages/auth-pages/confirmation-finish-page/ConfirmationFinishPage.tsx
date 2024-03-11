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
import AuthAPI from '@/lib/api/auth/AuthAPI';
import { LogoVariant } from '@/types/logo';

import * as styles from './ConfirmationFinishPage.styles';

interface ConfirmationFinishPageProps {
  token: string;
}

const ConfirmationFinishPage: FC<ConfirmationFinishPageProps> = ({ token }) => {
  useEffect(() => {
    try {
      AuthAPI.confirmEmail(token);
    } catch (e) {}
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
