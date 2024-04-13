import { LockClosedIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';

import * as styles from './PasswordrecoverSuccess.styles';

const Page = () => {
  return (
    <Box sx={styles.wrapper}>
      <Link href="/">
        <Stack flexDirection="row" alignSelf="flex-start" gap="10px">
          <Logo />
          <Typography typography="logoSmall">AUTOLAB</Typography>
        </Stack>
      </Link>
      <Stack sx={styles.info}>
        <LockClosedIcon width={40} height={40} />
        <Typography typography="h3Medium" sx={styles.check}>
          Пароль успішно змінено
        </Typography>
        <Button
          href="/profile"
          color={ButtonColor.PRIMARY}
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.CONTAINED}
          icon={ButtonIcon.NONE}
          fullWidth
        >
          Перейти до профілю
        </Button>
      </Stack>
    </Box>
  );
};

export default Page;
