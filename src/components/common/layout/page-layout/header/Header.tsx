'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { mutate } from 'swr';

import Logo from '@/components/common/icons/Logo';
import AuthButtons from '@/components/common/layout/page-layout/header/components/auth-buttons';
import Menu from '@/components/common/layout/page-layout/header/menu/Menu';
import useUser from '@/hooks/useUser';
import storageUtil from '@/lib/utils/storageUtil';

import * as styles from './Header.styles';

const Header = () => {
  const [render, setRender] = useState(false);
  const { user, isError, isLoading } = useUser();
  const router = useRouter();

  const logout = () => {
    storageUtil.deleteToken();
    setRender(!render);
    mutate('/api/auth');
    router.push('/');
  };

  console.log(user, isError, isLoading);

  return (
    <Box sx={styles.wrapper}>
      <Link href="/">
        <Logo />
        <Typography variant="h4" sx={styles.textLogo}>
          AUTOLAB
        </Typography>
      </Link>
      <Menu />
      {!user || isError ? (
        <AuthButtons />
      ) : (
        <>
          {isLoading ? (
            <Typography>Завантаження...</Typography>
          ) : (
            <Box>
              <Link href="/profile">
                <Typography variant="h6">{user?.username}</Typography>
              </Link>
              <Button onClick={logout}>
                <Typography>Вийти</Typography>
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Header;
