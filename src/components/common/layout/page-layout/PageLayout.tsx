import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

import Header from '@/components/common/layout/page-layout/header/Header';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <h1>hjdhjkdh</h1>
      {children}
    </Box>
  );
};

export default PageLayout;
