'use client';

import { AppBar, Avatar, Box, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import AuthButtons from '@/components/common/layout/page-layout/header/components/auth-buttons';
import Menu from '@/components/common/layout/page-layout/header/menu/Menu';
import useUser from '@/hooks/useUser';

import * as styles from './Header.styles';

const Header = () => {
  const { user, isError, isLoading } = useUser();

  // const logout = async () => {
  //   storageUtil.deleteToken();
  //   await mutate();
  //   router.push('/');
  // };

  return (
    <AppBar position="sticky" sx={styles.wrapper}>
      <Link href="/">
        <Logo />
        <Typography sx={styles.textLogo}>AUTOLAB</Typography>
      </Link>
      {user && !isError && <Menu />}
      {!user || isError ? (
        <AuthButtons />
      ) : (
        <>
          {isLoading ? (
            <Typography>Завантаження...</Typography>
          ) : (
            <Link href="/profile">
              <Box sx={styles.userInfo}>
                <Typography variant="h6" sx={styles.name}>
                  {user.lastname} {user.firstname}
                </Typography>
                <Typography sx={styles.organisation}>Organistaion</Typography>
              </Box>
              <Avatar src="/images/avatar.jpg" sx={{ width: 40, height: 40 }}>
                {user.lastname[0] + user.firstname[0]}
              </Avatar>
            </Link>
          )}
        </>
      )}
    </AppBar>
  );
};

export default Header;
