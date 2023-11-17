import React from 'react';
import { Box } from '@mui/material';

import { menuItems } from '@/components/common/layout/page-layout/header/menu/constants/menuItems';
import LinkButton from '@/components/common/ui/link-button';
import { LinkButtonPlace } from '@/components/common/ui/link-button/types';

import * as styles from './Menu.styles';

const Menu = () => {
  return (
    <Box sx={styles.menu}>
      <nav>
        {menuItems.map((item) => (
          <LinkButton
            place={LinkButtonPlace.HEADER}
            key={item.url}
            href={item.url}
          >
            {item.title}
          </LinkButton>
        ))}
      </nav>
    </Box>
  );
};

export default Menu;
