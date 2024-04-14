import React from 'react';
import { Box, Typography } from '@mui/material';

import ProfileCard from '@/app/profile/components/profile-card/ProfileCard';

import Tabs from './components/tabs';
import * as styles from './ProfilePage.styles';

const Profile = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Typography typography="h4Bold">Профіль</Typography>
      </Box>
      <ProfileCard />
      <Tabs />
    </Box>
  );
};

export default Profile;
