import { FC } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';

import * as styles from './AuthButtons.styles';

const AuthButtons: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Link href="/login">
        <Button
          variant={ButtonVariant.OUTLINED}
          icon={ButtonIcon.NONE}
          color={ButtonColor.PRIMARY}
          size={ButtonSize.SMALL}
        >
          Увійти
        </Button>
      </Link>
      <Link href="/register">
        <Button
          variant={ButtonVariant.CONTAINED}
          icon={ButtonIcon.NONE}
          color={ButtonColor.PRIMARY}
          size={ButtonSize.SMALL}
        >
          Зареєструватись
        </Button>
      </Link>
    </Box>
  );
};

export default AuthButtons;
