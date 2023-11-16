import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import Logo from '@/components/common/icons/Logo';
import { LogoVariant } from '@/types/logo';

import * as styles from './MainPage.styles';

const MainPage: FC = () => {
  return (
    <Box sx={styles.wrapper} component="main">
      <Box sx={styles.overview}>
        <Box sx={styles.title}>
          <Logo size={LogoVariant.MEDIUM} />
          <Typography variant="h1" sx={styles.logo}>
            AUTOLAB
          </Typography>
        </Box>
        <Typography sx={styles.text}>
          AutoLab - це інноваційний інструмент, який змінить поняття про
          управління вашою СТО. Наша платформа розроблена, щоб зробити процес
          управління вашим автомобільним сервісним центром максимально
          ефективним і зручним.
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Почати роботу
        </Button>
      </Box>
      <Box sx={styles.needs}>
        <Typography sx={styles.question}>Для чого це потрібно?</Typography>
      </Box>
    </Box>
  );
};

export default MainPage;
