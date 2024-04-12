import useSWR from 'swr';

import UserAPI from '@/lib/api/user/UserAPI';

const useUser = () => {
  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR('authorization', () => UserAPI.getUser(), {
    revalidateOnFocus: false,
  });

  return {
    user,
    isLoading,
    isError: error,
    mutate,
  };
};

export default useUser;
