'use client';

import { FC } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/common/ui/button';
import SideSection from '@/components/pages/auth-pages/components/side-section';
import LoginForm from '@/components/pages/auth-pages/login-page/components/login-form';
import theme from '@/styles/theme';

import * as styles from './LoginPage.styles';

const LoginPage: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));

  return (
    <Box sx={styles.wrapper}>
      {isMobile && (
        <Image
          src="/svgs/auth-top.svg"
          alt="picture"
          width={360}
          height={136}
        />
      )}
      <LoginForm />
      {!isMobile ? (
        <Box component="section">
          <SideSection text="login" link="/register" />
        </Box>
      ) : (
        <Stack
          alignItems="center"
          mx="16px"
          mb="36px"
          flexDirection="column"
          gap="10px"
        >
          <Typography typography="body1" color="white.main">
            Не маєте акаунту?
          </Typography>
          <Link style={{ textDecoration: 'none' }} href="/register">
            <Button size="small" color="secondary" variant="outlined">
              Зареєструватися
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};

export default LoginPage;
