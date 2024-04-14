import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, IconButton, Typography } from '@mui/material';

import Tag from '@/components/common/ui/tag';

import * as styles from './OrganisationCard.styles';

interface OrganisationCardProps {
  avatar: string;
  name: string;
  position: string;
}

const OrganisationCard: FC<OrganisationCardProps> = ({
  avatar,
  name,
  position,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.info}>
        <Avatar src={avatar} sx={styles.avatar} />
        <Box>
          <Typography typography="h6Bold" sx={{ mb: '8px' }}>
            {name}
          </Typography>
          <Tag text={position} color="orange" />
        </Box>
      </Box>
      <IconButton sx={styles.deleteButton}>
        <TrashIcon />
      </IconButton>
    </Box>
  );
};

export default OrganisationCard;
