'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';

import AuthContextProvider from '@/hooks/use-auth/auth-context/AuthContext';
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
        <SWRConfig value={swrConfig}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </SWRConfig>
      </ToastContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
