import useSWR from 'swr';

import UserAPI from '@/lib/api/user/UserAPI';

const useUser = () => {
  const { data, error, isLoading } = useSWR(UserAPI.getUser());

  return {
    user: data,
    isLoading,
    isError: error,
  };
};

export default useUser;
