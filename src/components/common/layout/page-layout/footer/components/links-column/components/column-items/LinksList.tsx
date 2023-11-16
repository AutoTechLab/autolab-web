import { FC } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

import { LinksItems } from '@/components/common/layout/page-layout/footer/types/Links';

import * as styles from './LinksList.styles';

interface ColumnItemsProps {
  items: LinksItems[];
}

const LinksList: FC<ColumnItemsProps> = ({ items }) => {
  return (
    <Box sx={styles.list}>
      <ul>
        {items.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </ul>
    </Box>
  );
};

export default LinksList;
