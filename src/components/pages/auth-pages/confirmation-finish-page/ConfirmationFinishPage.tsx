import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import { LogoVariant } from '@/types/logo';

import * as styles from './ConfirmationFinishPage.styles';

interface ConfirmationFinishPageProps {
  id: string;
}

const ConfirmationFinishPage: FC<ConfirmationFinishPageProps> = ({ id }) => {
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
        Тепер ти можеш розпочати разом з AutoLab ефективне управління своєю СТО!
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
