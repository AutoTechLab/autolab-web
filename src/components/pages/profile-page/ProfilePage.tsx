'use client';

import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useUser from '@/hooks/useUser';

const ProfilePage: FC = () => {
  const { user, isLoading, isError } = useUser();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        router.replace('/login');
      }
    }, 1000);
  }, [user, isError]);

  return (
    <Box>
      {user ? (
        <Box>
          <Image
            src="/images/avatar.jpg"
            alt={'3123'}
            width={200}
            height={200}
          />
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
