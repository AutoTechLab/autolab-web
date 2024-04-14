import { FC } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

import Button from '@/components/common/ui/button';

import * as styles from './AuthButtons.styles';

const AuthButtons: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Link href="/login">
        <Button variant="outlined" size="small">
          Увійти
        </Button>
      </Link>
      <Link href="/register">
        <Button size="small">Зареєструватись</Button>
      </Link>
    </Box>
  );
};

export default AuthButtons;
