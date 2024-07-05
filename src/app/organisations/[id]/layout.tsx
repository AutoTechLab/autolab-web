import { FC, PropsWithChildren } from 'react';
import { Box, Typography } from '@mui/material';

import OrganisationDashboard from '@/app/organisations/[id]/components/organisation-dasboard/OrganisationDashboard';

import * as styles from './Organisation.styles';

const organisation = {
  avatar: '/svgs/organisation-default.svg',
  name: 'Автосервіс Гепард',
  address: 'м. Київ, проспект Перемоги 10',
  owner: 'Новиков Ігор Михайлович',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cupiditate dignissimos dolorem dolores, error expedita fugit id itaque minima minus molestias nemo, nobis nostrum nulla placeat quis repudiandae! Quod.\n',
};

const OrganisationLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={styles.layout}>
      <OrganisationDashboard organisation={organisation} />
      {children}
    </Box>
  );
};

export default OrganisationLayout;
