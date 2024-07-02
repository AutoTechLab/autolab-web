'use client';
import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Link from 'next/link';

import Tag from '@/components/common/ui/tag';
import useToast from '@/hooks/use-toast';

import RoundButtonIcon from '../round-button-icon';

import * as styles from './OrganisationCard.styles';

interface OrganisationCardProps {
  avatar: string;
  name: string;
  position: string;
  description?: string;
}

const OrganisationCard: FC<OrganisationCardProps> = ({
  avatar,
  name,
  position,
  description = '',
}) => {
  const toast = useToast();
  const handleDelete = () => {
    toast.success('Deleted', '', 3000);
  };

  const href = 'organisation/1';

  return (
    <Box sx={styles.wrapper}>
      <Link href={href}>
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
        {description && (
          <Typography sx={styles.description}>{description}</Typography>
        )}
      </Link>
    </Box>
  );
};

export default OrganisationCard;
