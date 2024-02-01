'use client';
import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import Footer from '@/components/common/layout/page-layout/footer';
import Header from '@/components/common/layout/page-layout/header/Header';

import * as styles from './PageLayout.styles';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes('/login') && !pathname.includes('/register') ? (
        <Box sx={styles.layout}>
          <Header />
          <Box component="main" sx={styles.main}>
            {children}
          </Box>
          <Footer />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PageLayout;
