'use client';

import { AppBar, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import AuthButtons from '@/components/common/layout/page-layout/header/components/auth-buttons';
import UserInfo from '@/components/common/layout/page-layout/header/components/user-info';
import Menu from '@/components/common/layout/page-layout/header/menu/Menu';
import useUser from '@/hooks/useUser';

import * as styles from './Header.styles';

const Header = () => {
  const { user, isLoading, isError } = useUser();

  return (
    <AppBar position="sticky" sx={styles.wrapper}>
      <Link href="/">
        <Logo />
        <Typography sx={styles.textLogo}>AUTOLAB</Typography>
      </Link>
      {user && !isError && <Menu />}
      {!user && !isLoading ? (
        <AuthButtons />
      ) : (
        <UserInfo user={user} isLoading={isLoading} />
      )}
    </AppBar>
  );
};

export default Header;
