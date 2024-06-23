'use client';

import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';

import * as styles from '../components/pages/NotFound.styles';

const NotFound: FC = () => {
  const router = useRouter();
  return (
    <Box sx={styles.wrapper}>
      <Image
        src="/svgs/not-found.svg"
        alt="Not found"
        width={705}
        height={420}
      />
      <Typography textAlign="center" mb="32px" typography="h6">
        Упсс.. Сторінка не знайдена!
        <br />
        Ви можете написати в підтримку, якщо ви впевнені, що виникла помилка
      </Typography>
      <Button
        onClick={() => router.back()}
        size={ButtonSize.LARGE}
        variant={ButtonVariant.CONTAINED}
        color={ButtonColor.PRIMARY}
        icon={ButtonIcon.NONE}
      >
        Повернутися назад
      </Button>
    </Box>
  );
};

export default NotFound;
