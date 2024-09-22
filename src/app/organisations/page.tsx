import { Box, Typography } from '@mui/material';

import OrganisationsList from '@/app/organisations/components/organisations-llist';

import * as styles from './Organisations.styles';

const OrganisationsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography mt="48px" typography="h5Medium">
        Мої організації
      </Typography>
      <OrganisationsList />
    </Box>
  );
};

export default OrganisationsPage;
