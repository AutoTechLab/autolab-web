'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';

import ToastContextProvider from '@/hooks/use-toast/use-toast-context/useToastContext';
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
      <ToastContextProvider>
        <SWRConfig value={swrConfig}>{children}</SWRConfig>
      </ToastContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
