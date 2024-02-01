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
      if (!isLoading && !user) {
        router.replace('/login');
      }
    }, 3000);
  }, [user, isLoading, isError, router]);

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
