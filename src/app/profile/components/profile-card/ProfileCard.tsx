'use client';

import { FC, useState } from 'react';
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Avatar, Box, Modal, Typography } from '@mui/material';

import ProfileEditPopup from '@/app/profile/components/profile-card/popup/ProfileEditPopup';
import ProfileCardSkeleton from '@/app/profile/components/profile-card/skeletons';
import Button from '@/components/common/ui/button';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import getDate from '@/lib/utils/getDate';
import getYears from '@/lib/utils/getYears';

import * as styles from './ProfileCard.styles';

const ProfileCard: FC = () => {
  const { user, isLoading } = useAuthContext();
  const birthday = getDate(user?.birthDate as string);
  const years = getYears(user?.birthDate as string);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.wrapper}>
      {isLoading ? (
        <ProfileCardSkeleton />
      ) : (
        <>
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
          <Button onClick={handleClick} sx={{ alignSelf: 'flex-end' }}>
            Редагувати
          </Button>
          <ProfileEditPopup open={open} handleClick={handleClick} />
        </>
      )}
    </Box>
  );
};

export default ProfileCard;
