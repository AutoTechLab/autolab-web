import { FC } from 'react';
import { Box } from '@mui/material';

import { LinksItems } from '@/components/common/layout/page-layout/footer/types/Links';
import LinkButton from '@/components/common/ui/link-button';
import { LinkButtonPlace } from '@/components/common/ui/link-button/types';

import * as styles from './LinksList.styles';

interface ColumnItemsProps {
  items: LinksItems[];
}

const LinksList: FC<ColumnItemsProps> = ({ items }) => {
  return (
    <Box sx={styles.list}>
      {items.map((item) => (
        <LinkButton
          place={LinkButtonPlace.FOOTER}
          key={item.href}
          href={item.href}
        >
          {item.title}
        </LinkButton>
      ))}
    </Box>
  );
};

export default LinksList;
