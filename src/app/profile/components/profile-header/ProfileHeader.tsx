'use client';

import React, { FC } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import LogoutButton from '@/components/common/ui/logout-button/LogoutButton';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import StorageUtil from '@/lib/utils/storageUtil';

import * as styles from './ProfileHeader.styles';

const ProfileHeader: FC = () => {
  const router = useRouter();
  const { isLoading, mutate } = useAuthContext();
  const logout = async () => {
    StorageUtil.deleteToken();
    await mutate();
    router.push('/login');
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography typography="h4Bold">Профіль</Typography>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: '6px' }}
          width="116px"
          height="40px"
        />
      ) : (
        <LogoutButton onClick={() => logout()}>Вихід</LogoutButton>
      )}
    </Box>
  );
};

export default ProfileHeader;
