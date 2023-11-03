import { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

import { LinksItems } from '@/components/common/layout/page-layout/footer/types/Links';

import * as styles from './LinksList.styles';

interface ColumnItemsProps {
  items: LinksItems[];
}

const LinksList: FC<ColumnItemsProps> = ({ items }) => {
  return (
    <List sx={styles.list}>
      {items.map((item) => (
        <ListItemButton sx={styles.button} key={item.title} href={item.href}>
          <ListItemText
            primaryTypographyProps={{ sx: styles.text }}
            primary={item.title}
          />
        </ListItemButton>
      ))}
    </List>
  );
};

export default LinksList;
