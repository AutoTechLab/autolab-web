import { Box, Stack } from '@mui/material';

import OrganisationBar from '@/app/organisations/[id]/components/organisation-bar';
import { mocks } from '@/app/profile/components/tabs/constants';
import Card from '@/components/common/ui/card';
import Position from '@/components/common/ui/card/components/Position';
import IconButton from '@/components/common/ui/icon-button/IconButton';
import Input from '@/components/common/ui/input/Input';

import * as styles from './Organisation.styles';

const OrganisationPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <OrganisationBar />
      <Box sx={styles.search}>
        <Input isSearch placeholder="Пошук" sx={styles.input} />
        <IconButton />
      </Box>
      <Stack flexDirection="column" gap="10px">
        {mocks.map((mock) => (
          <Card key={mock.avatar} avatar={mock.avatar} name={mock.name}>
            <Position position={mock.position} />
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default OrganisationPage;
