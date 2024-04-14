import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import Tag from '@/components/common/ui/tag';
import TrashButton from '@/components/common/ui/trash-button';
import useToast from '@/hooks/use-toast';

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
  const toast = useToast();
  const handleDelete = () => {
    toast.success('Deleted', '', 3000);
  };
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
      <TrashButton onClick={handleDelete} />
    </Box>
  );
};

export default OrganisationCard;
