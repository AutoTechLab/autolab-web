import { useSession } from 'next-auth/react';
import useSWR from 'swr';

import UserAPI from '@/lib/api/user/UserAPI';

const useUser = () => {
  const { data: session } = useSession();
  const {
    data: user,
    error,
    isLoading,
  } = useSWR('/auth/user', (url) =>
    UserAPI.getUser(url, session?.user.accessToken),
  );

  return {
    user,
    isLoading,
    isError: error,
  };
};

export default useUser;
