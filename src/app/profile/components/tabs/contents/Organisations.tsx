import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { mocks } from '@/app/profile/components/tabs/constants';
import Gear from '@/components/common/icons/Gear';
import Button from '@/components/common/ui/button';

import OrganisationCard from '../../../../../components/common/ui/organisation-card';
import * as styles from '../Tabs.styles';

const Organisations: FC = () => {
  if (mocks.length === 0) {
    return (
      <Box sx={styles.organisations}>
        <Stack
          sx={styles.noOrganisations}
          flexDirection="column"
          alignItems="center"
        >
          <Gear />
          <Typography typography="h6">
            У вас покищо немає доданих організацій!
            <br />
            Ви можете приєднатися до організації або створити власну.
          </Typography>
          <Stack flexDirection="row" gap="16px">
            <Button variant="outlined">Створити</Button>
            <Button>Приєднатися</Button>
          </Stack>
        </Stack>
      </Box>
    );
  }

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
      <Button
        sx={{ alignSelf: 'self-end', mt: '15px' }}
        variant="outlined"
        icon="right"
      >
        Створити
      </Button>
    </Box>
  );
};

export default Organisations;
