'use client';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

import IconButton from '@/components/common/ui/icon-button/IconButton';
import Input from '@/components/common/ui/input/Input';
import OrganisationPopup from '@/components/common/ui/pop-ups/organisation-popup/OrganisationPopup';

import * as styles from './OrganisationsList.styles';

interface OrganisationsListProps {}

const OrganisationsList: FC<OrganisationsListProps> = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.wrapper}>
      <OrganisationPopup open={open} handleClick={handleClick}>
        <Box sx={styles.search}>
          <Input sx={styles.input} isSearch fullWidth placeholder="Пошук" />
          <IconButton onClick={handleClick} />
        </Box>
      </OrganisationPopup>
      <Box sx={styles.organisations}>
        {/*{mocks.map((organisation) => (*/}
        {/*  <Card*/}
        {/*    key={organisation.name}*/}
        {/*    avatar={organisation.avatar}*/}
        {/*    name={organisation.name}*/}
        {/*  >*/}
        {/*    <Position position={organisation.position} />*/}
        {/*  </Card>*/}
        {/*))}*/}
      </Box>
    </Box>
  );
};

export default OrganisationsList;
