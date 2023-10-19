import { SWRConfig } from 'swr';

import useUser from '@/hooks/useUser';

const Profile = () => {
  const { user, isLoading, isError } = useUser();

  return (
    <SWRConfig>
      <h1>{user}</h1>;
    </SWRConfig>
  );
};

export default Profile;
