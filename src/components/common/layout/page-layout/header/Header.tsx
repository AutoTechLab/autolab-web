'use client';

import Bars3BottomRightIcon from '@heroicons/react/24/solid/Bars3BottomRightIcon';
import { AppBar, IconButton, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import AuthButtons from '@/components/common/layout/page-layout/header/components/auth-buttons';
import UserInfo from '@/components/common/layout/page-layout/header/components/user-info';
import Menu from '@/components/common/layout/page-layout/header/menu/Menu';
import { useAuthContext } from '@/hooks/use-auth/auth-context/AuthContext';
import theme from '@/styles/theme';

import * as styles from './Header.styles';

const Header = () => {
  const { user, isLoading, isError } = useAuthContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktopSemiMedium'));

  return (
    <AppBar position="sticky" sx={styles.wrapper}>
      <Link href="/">
        <Logo />
        <Typography sx={styles.textLogo}>AUTOLAB</Typography>
      </Link>
      {isMobile ? (
        <IconButton>
          <Bars3BottomRightIcon width={24} height={24} color="black" />
        </IconButton>
      ) : (
        <>
          {user && !isError && <Menu />}
          {!user && !isLoading ? (
            <AuthButtons />
          ) : (
            <UserInfo user={user} isLoading={isLoading} />
          )}
        </>
      )}
    </AppBar>
  );
};

export default Header;
