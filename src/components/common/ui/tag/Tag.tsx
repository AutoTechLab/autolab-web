import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { ITagColors } from '@/components/common/ui/tag/types';

import * as styles from './Tag.styles';

interface TagProps {
  text: string;
  color: ITagColors;
}

const Tag: FC<TagProps> = ({ text, color }) => {
  return (
    <Box sx={styles.wrapper(color)}>
      <Typography typography="body1">{text}</Typography>
    </Box>
  );
};

export default Tag;
