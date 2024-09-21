import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import LogoutButton from '@/components/common/ui/logout-button/LogoutButton';

import * as styles from './ProfileHeader.styles';

const ProfileHeader: FC = () => {
  const logout = async () => {
    'use server';

    cookies().delete('accessToken');
    redirect('/login');
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography typography="h4Bold">Профіль</Typography>

      <form action={logout}>
        <LogoutButton type="submit">Вихід</LogoutButton>
      </form>
    </Box>
  );
};

export default ProfileHeader;
