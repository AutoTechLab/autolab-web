import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import InfoCard from '@/app/organisations/[id]/components/info-card/InfoCard';
import Button from '@/components/common/ui/button';

import * as styles from './OrganisationDashboard.styles';

interface OrganisationDashboardProps {
  organisation: {
    avatar: string;
    name: string;
    address: string;
    owner: string;
    description?: string;
  };
}

const OrganisationDashboard: FC<OrganisationDashboardProps> = ({
  organisation,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Image
        src={organisation.avatar}
        alt="organisation picture"
        width={355}
        height={200}
      />
      <Typography typography="h5Bold">{organisation.name}</Typography>
      <Box>
        <InfoCard name="Адреса" value={organisation.address} />
        <InfoCard name="Власник" value={organisation.owner} />
      </Box>
      <Typography typography="body2">{organisation.description}</Typography>
      <Box display="flex" flexDirection="row" gap="16px">
        <Button size="small">Редагувати</Button>
        <Button size="small">Видалити</Button>
      </Box>
    </Box>
  );
};

export default OrganisationDashboard;
