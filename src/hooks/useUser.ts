import useSWR from 'swr';

import UserAPI from '@/lib/api/user/UserAPI';

const useUser = () => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR('/auth/user', (url) => UserAPI.getUser(url));

  return {
    user,
    isLoading,
    isError: error,
  };
};

export default useUser;
