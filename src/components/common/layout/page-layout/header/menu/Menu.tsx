import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

import { menuItems } from '@/components/common/layout/page-layout/header/menu/constants/menuItems';

import * as styles from './Menu.styles';

const Menu = () => {
  return (
    <Box sx={styles.menu}>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.title} href={item.url}>
            <Box sx={styles.item}>{item.title}</Box>
          </Link>
        ))}
      </nav>
    </Box>
  );
};

export default Menu;
