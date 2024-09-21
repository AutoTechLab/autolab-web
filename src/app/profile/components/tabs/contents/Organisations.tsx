import { FC, useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';

import { mocks } from '@/app/profile/components/tabs/constants';
import Gear from '@/components/common/icons/Gear';
import Button from '@/components/common/ui/button';
import Card from '@/components/common/ui/card';
import Position from '@/components/common/ui/card/components/Position';
import OrganisationPopup from '@/components/common/ui/pop-ups/organisation-popup/OrganisationPopup';

import * as styles from '../Tabs.styles';

const Organisations: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  if (mocks.length === 0) {
    return (
      <OrganisationPopup open={open} handleClick={handleClick}>
        <Box sx={styles.organisations}>
          <Stack
            sx={styles.noOrganisations}
            flexDirection="column"
            alignItems="center"
          >
            <Gear />
            <Typography typography="h6">
              У вас поки немає доданих організацій!
              <br />
              Ви можете створити власну або власники інших організацій можуть
              додати вас до свого складу :)
            </Typography>
            <Stack flexDirection="row" gap="16px">
              <Button
                onClick={handleClick}
                icon="left"
                iconComponent={<PencilSquareIcon />}
              >
                Створити
              </Button>
            </Stack>
          </Stack>
        </Box>
      </OrganisationPopup>
    );
  }

  return (
    <OrganisationPopup open={open} handleClick={handleClick}>
      <Box sx={styles.organisations}>
        {mocks.map((organisation) => (
          <Card
            key={organisation.name}
            avatar={organisation.avatar}
            name={organisation.name}
          >
            <Position position={organisation.position} />
          </Card>
        ))}
        <Button
          sx={{ alignSelf: 'self-end', mt: '15px' }}
          variant="outlined"
          icon="right"
          onClick={handleClick}
        >
          Створити
        </Button>
      </Box>
    </OrganisationPopup>
  );
};

export default Organisations;
