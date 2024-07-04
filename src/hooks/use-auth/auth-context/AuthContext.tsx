import { createContext, FC, ReactNode, useContext } from 'react';

import useAuth from '@/hooks/use-auth/useAuth';
import { UserBody } from '@/lib/api/user/types/UserBody';

export interface AuthContextBody {
  user: UserBody | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: () => void;
}

const AuthContext = createContext<AuthContextBody | undefined>(undefined);

export const useAuthContext = () => useContext(AuthContext) as AuthContextBody;

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
