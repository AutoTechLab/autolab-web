'use client';

import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import useUser from '@/hooks/useUser';

const ProfilePage: FC = () => {
  const { user, isLoading, isError } = useUser();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!user || isError) {
        router.replace('/login');
      }
    }, 1000);
  }, [user, isError]);

  return (
    <Box>
      {user ? (
        <Box>
          <Box>{user.username}</Box>
          <Box>{user.email}</Box>
        </Box>
      ) : (
        <>{(isLoading || isError) && <Box>Завантаження...</Box>}</>
      )}
    </Box>
  );
};

export default ProfilePage;
