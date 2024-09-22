import useSWR from 'swr';

import UserAPI from '@/lib/api/user/UserAPI';

const useAuth = () => {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR('authorization', () => UserAPI.getUser(), {
    revalidateOnFocus: false,
    refreshInterval: 0,
    revalidateOnReconnect: false,
  });

  return {
    user,
    isLoading,
    isError: error,
    mutate,
  };
};

export default useAuth;
