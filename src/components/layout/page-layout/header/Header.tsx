import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import Menu from '@/components/layout/page-layout/header/menu/Menu';

import * as styles from './Header.styles';

const Header = () => {
  const user = null;

  return (
    <Box sx={styles.wrapper}>
      <Link href="/">
        <Logo />
        <Typography variant="h4" sx={styles.textLogo}>
          AUTOLAB
        </Typography>
      </Link>
      <Menu />
      {!user ? (
        <Box sx={styles.auth}>
          <Link style={styles.signin} href="/auth">
            Увійти
          </Link>
          <Link style={styles.signup} href="/register">
            Зареєструватись
          </Link>
        </Box>
      ) : (
        <Box>User</Box>
      )}
    </Box>
  );
};

export default Header;
