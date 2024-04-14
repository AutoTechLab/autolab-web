import { FC } from 'react';
import { Box } from '@mui/material';

import OrganisationCard from '@/app/profile/components/tabs/components/organisation-card';
import { mocks } from '@/app/profile/components/tabs/constants';

import * as styles from '../Tabs.styles';

const Organisations: FC = () => {
  return (
    <Box sx={styles.organisations}>
      {mocks.map((organisation) => (
        <OrganisationCard
          key={organisation.name}
          avatar={organisation.avatar}
          name={organisation.name}
          position={organisation.position}
        />
      ))}
    </Box>
  );
};

export default Organisations;
