import { FC } from 'react';
import {
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Box, Skeleton, Typography } from '@mui/material';

import * as styles from '@/app/profile/components/profile-card/ProfileCard.styles';
import Button from '@/components/common/ui/button';

const ProfileCardSkeleton: FC = () => {
  return (
    <Box sx={styles.info}>
      <Skeleton variant="circular" width="160px" height="160px" />
      <Box>
        <Skeleton
          variant="text"
          height="40px"
          width="350px"
          sx={{ mb: '12px' }}
        />
        <Skeleton
          variant="text"
          width="120px"
          height="28px"
          sx={{ mb: '21px' }}
        />
        <Box sx={styles.iconInfo}>
          <Skeleton variant="rounded" width="100px" height="22px" />
        </Box>
        <Box sx={styles.iconInfo}>
          <Skeleton variant="rounded" width="150px" height="22px" />
        </Box>
        <Box sx={styles.iconInfo}>
          <Skeleton variant="rounded" width="200px" height="22px" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCardSkeleton;
