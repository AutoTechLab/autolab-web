import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { Links } from '../../types/Links';

import LinksList from './components/column-items';
import SupportForm from './components/support-form';
import * as styles from './FooterColumn.styles';

interface LinksColumnProps {
  column: Links;
}

const FooterColumn: FC<LinksColumnProps> = ({ column }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>{column.title}</Typography>
      {Array.isArray(column.items) ? (
        <LinksList items={column.items} />
      ) : (
        <SupportForm />
      )}
    </Box>
  );
};

export default FooterColumn;
