import React from 'react';
import { Box, Typography } from '@mui/material';

import ProfileCard from '@/app/profile/components/profile-card/ProfileCard';

import * as styles from './ProfilePage.styles.';

const Profile = async () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Typography typography="h4Bold">Профіль</Typography>
      </Box>
      <ProfileCard />
    </Box>
  );
};

export default Profile;
