'use client';
import React, { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import Footer from '@/components/common/layout/page-layout/footer';
import Header from '@/components/common/layout/page-layout/header/Header';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== '/login' && pathname !== '/register' ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PageLayout;
