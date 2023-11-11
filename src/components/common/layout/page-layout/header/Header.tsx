'use client';

import { AppBar, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/components/common/icons/Logo';
import AuthButtons from '@/components/common/layout/page-layout/header/components/auth-buttons';
import Menu from '@/components/common/layout/page-layout/header/menu/Menu';
import useUser from '@/hooks/useUser';
import storageUtil from '@/lib/utils/storageUtil';

import * as styles from './Header.styles';

const Header = () => {
  const { user, isError, isLoading, mutate } = useUser();
  const router = useRouter();

  const logout = async () => {
    storageUtil.deleteToken();
    await mutate();
    router.push('/');
  };

  console.log(user, isError, isLoading);

  return (
    <AppBar position="sticky" sx={styles.wrapper}>
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
    </AppBar>
  );
};

export default Header;
