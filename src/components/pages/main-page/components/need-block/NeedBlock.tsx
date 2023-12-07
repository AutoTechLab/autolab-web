import React, { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './NeedBlock.styles';
interface NeedBlockProps {
  icon: ReactNode;
  title: string;
  text: string;
}
const NeedBlock: FC<NeedBlockProps> = ({ icon, title, text }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconBox}>{icon}</Box>
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.text}>{text}</Typography>
    </Box>
  );
};

export default NeedBlock;
