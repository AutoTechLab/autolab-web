import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import Tag from '@/components/common/ui/tag';
import useToast from '@/hooks/use-toast';

import RoundButtonIcon from '../round-button-icon';

import * as styles from './OrganisationCard.styles';

interface OrganisationCardProps {
  avatar: string;
  name: string;
  position: string;
  text?: string;
}

const OrganisationCard: FC<OrganisationCardProps> = ({
  avatar,
  name,
  position,
  text = '',
}) => {
  const toast = useToast();
  const handleDelete = () => {
    toast.success('Deleted', '', 3000);
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Box sx={styles.info}>
          <Avatar src={avatar} sx={styles.avatar} />
          <Box>
            <Typography typography="h6Bold" sx={{ mb: '8px' }}>
              {name}
            </Typography>
            <Tag text={position} color="orange" />
          </Box>
        </Box>
        <RoundButtonIcon onClick={handleDelete} />
      </Box>
      {text && <Typography sx={styles.description}>{text}</Typography>}
    </Box>
  );
};

export default OrganisationCard;
