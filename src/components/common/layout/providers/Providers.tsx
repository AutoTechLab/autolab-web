'use client';

import { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';

interface ProvidersProps {
  children: ReactNode;
}

const swrConfig = {
  refreshInterval: 1000,
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
};

export default Providers;
