'use client';

import { FC } from 'react';
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Avatar, Box, Typography } from '@mui/material';

import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import getDate from '@/lib/utils/getDate';
import getYears from '@/lib/utils/getYears';

import * as styles from './ProfileCard.styles';

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = () => {
  const { user } = useAuthContext();
  const birthday = getDate(user?.birthDate as string);
  const years = getYears(user?.birthDate as string);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.info}>
        <Avatar src="/images/avatar.jpg" sx={styles.avatar} />
        <Box>
          <Typography typography="h4Bold" sx={{ mb: '12px' }}>
            {user?.lastname} {user?.firstname} {user?.middlename}
          </Typography>
          <Typography typography="h6Medium" sx={{ mb: '21px' }}>
            @{user?.username}
          </Typography>
          <Box sx={styles.iconInfo}>
            <CalendarIcon />
            <Typography typography="body1">
              {birthday} ({years})
            </Typography>
          </Box>
          <Box sx={styles.iconInfo}>
            <PhoneIcon />
            <Typography typography="body1">{user?.phone}</Typography>
          </Box>
          <Box sx={styles.iconInfo}>
            <EnvelopeIcon />
            <Typography typography="body1">{user?.email}</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{ alignSelf: 'flex-end' }}
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.CONTAINED}
        color={ButtonColor.PRIMARY}
        icon={ButtonIcon.NONE}
      >
        Редагувати
      </Button>
    </Box>
  );
};

export default ProfileCard;
