import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './InfoCard.styles';

interface InfoCardProps {
  name: string;
  value: string;
}

const InfoCard: FC<InfoCardProps> = ({ name, value }) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography color="gray.100" typography="body2">
        {name}
      </Typography>
      <Typography typography="body1Medium">{value}</Typography>
    </Box>
  );
};

export default InfoCard;
