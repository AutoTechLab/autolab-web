import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import Gear from '@/components/common/icons/Gear';
import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import NeedBlock from '@/components/pages/main-page/components/need-block';
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
        <Link href="/register">
          <Button
            variant={ButtonVariant.CONTAINED}
            icon={ButtonIcon.NONE}
            color={ButtonColor.PRIMARY}
            size={ButtonSize.LARGE}
          >
            Почати роботу
          </Button>
        </Link>
      </Box>
      <Box sx={styles.needs}>
        <Typography sx={styles.question}>Для чого це потрібно?</Typography>
        <Box sx={styles.blocks}>
          <NeedBlock
            icon={<Gear />}
            title="Автоматизація рутинних завдань"
            text="Забудьте про паперову роботу та неефективне управління. Ми пропонуємо інструменти для автоматизації процесів, таких як історія техобслуговування, облік робочого часу та багато інших."
          />
          <NeedBlock icon={<h1>Text</h1>} title={' x'} text={'xx'} />
          <NeedBlock icon={<h1>Text</h1>} title={' x'} text={'xx'} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
