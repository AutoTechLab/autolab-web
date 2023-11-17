'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';

import theme from '@/styles/theme';

interface ProvidersProps {
  children: ReactNode;
}

const swrConfig = {
  refreshInterval: 1000,
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={swrConfig}>{children}</SWRConfig>
    </ThemeProvider>
  );
};

export default Providers;
