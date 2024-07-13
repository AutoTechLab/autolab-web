import { FC } from 'react';
import { Typography } from '@mui/material';

import * as styles from '@/components/common/ui/card/Card.styles';
import type { NumberProps } from '@/components/common/ui/card/types';

const Phone: FC<NumberProps> = ({ phone }) => (
  <Typography sx={styles.phone}>телефон: {phone}</Typography>
);

export default Phone;
