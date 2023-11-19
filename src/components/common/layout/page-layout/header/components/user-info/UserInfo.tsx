'use client';

import { FC } from 'react';
import { Avatar, Box, Skeleton, Typography } from '@mui/material';
import Link from 'next/link';

import type { UserBody } from '@/lib/api/user/types/UserBody';

import * as styles from './UserInfo.styles';

interface UserInfoProps {
  user?: UserBody;
  isLoading: boolean;
}

const UserInfo: FC<UserInfoProps> = ({ user, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={styles.userInfo}>
            <Skeleton variant="text" sx={styles.name} />
            <Skeleton variant="text" sx={styles.organisation} />
          </Box>
          <Skeleton variant="circular" sx={{ width: '40px', height: '40px' }} />
        </Box>
      ) : (
        <>
          {user && (
            <Link style={styles.link} href="/profile">
              <Box sx={styles.userInfo}>
                <Typography variant="h6" sx={styles.name}>
                  {user.lastname} {user.firstname}
                </Typography>
                <Typography sx={styles.organisation}>Organisation</Typography>
              </Box>
              <Avatar src="/images/avatar.jpg" sx={{ width: 40, height: 40 }}>
                {user.lastname[0] + user.firstname[0]}
              </Avatar>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default UserInfo;
