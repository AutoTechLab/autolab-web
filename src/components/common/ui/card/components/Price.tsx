import { FC } from 'react';
import { Typography } from '@mui/material';

import * as styles from '@/components/common/ui/card/Card.styles';
import type { PriceProps } from '@/components/common/ui/card/types';

const Price: FC<PriceProps> = ({ price }) => (
  <Typography sx={styles.price}>{price}</Typography>
);

export default Price;
