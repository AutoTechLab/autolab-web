'use client';

import { FC, ReactNode } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

const Providers: FC<ProvidersProps> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
