'use client';

import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './ProfileHeader.styles';

const ProfileHeader: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography typography="h4Bold">Профіль</Typography>
    </Box>
  );
};

export default ProfileHeader;
