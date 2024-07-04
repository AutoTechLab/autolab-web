import React from 'react';
import { Box } from '@mui/material';

import ProfileCard from '@/app/profile/components/profile-card/ProfileCard';
import ProfileHeader from '@/app/profile/components/profile-header';

import Tabs from './components/tabs';
import * as styles from './ProfilePage.styles';

const Profile = () => {
  return (
    <Box sx={styles.wrapper}>
      <ProfileHeader />
      <ProfileCard />
      <Tabs />
    </Box>
  );
};

export default Profile;
