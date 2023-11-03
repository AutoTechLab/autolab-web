'use client';
import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

import Footer from '@/components/common/layout/page-layout/footer';
import Header from '@/components/common/layout/page-layout/header/Header';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default PageLayout;
