'use client';

import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/ui/button';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import storageUtil from '@/lib/utils/storageUtil';

const ProfilePage: FC = () => {
  const { user, isLoading, isError, mutate } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!isLoading && !user) {
        router.replace('/login');
      }
    }, 3000);
  }, [user, isLoading, isError, router]);

  const logout = async () => {
    storageUtil.deleteToken();
    await mutate();
    window.location.reload();
  };

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
          <Button onClick={logout}>Вийти</Button>
        </Box>
      ) : (
        <>{(isLoading || isError) && <Box>Завантаження...</Box>}</>
      )}
    </Box>
  );
};

export default ProfilePage;
