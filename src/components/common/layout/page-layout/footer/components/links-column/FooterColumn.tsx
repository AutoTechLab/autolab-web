import { FC } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

import { Links } from '@/components/common/layout/page-layout/footer/types/Links';

import * as styles from './FooterColumn.styles';

interface LinksColumnProps {
  column: Links;
}

const FooterColumn: FC<LinksColumnProps> = ({ column }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>{column.title}</Typography>
      {column.items.length && (
        <List sx={styles.list}>
          {column.items.map((item) => (
            <ListItemButton
              sx={styles.button}
              key={item.title}
              href={item.href}
            >
              <ListItemText
                primaryTypographyProps={{ sx: styles.text }}
                primary={item.title}
              />
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
};

export default FooterColumn;
