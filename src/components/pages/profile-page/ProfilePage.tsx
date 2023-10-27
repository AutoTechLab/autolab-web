'use client';

import { FC } from 'react';
import { Box } from '@mui/material';

import useUser from '@/hooks/useUser';

interface ProfilePageProps {
  prop: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ prop }) => {
  const { user, isLoading, isError } = useUser();
  console.log(user);
  return <Box>{user?.username}</Box>;
};

export default ProfilePage;
