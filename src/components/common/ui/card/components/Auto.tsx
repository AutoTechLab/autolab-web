import { FC } from 'react';
import { Typography } from '@mui/material';

import * as styles from '@/components/common/ui/card/Card.styles';
import { AutoProps } from '@/components/common/ui/card/types';

const Auto: FC<AutoProps> = ({ auto }) => {
  return (
    <>
      <Typography sx={styles.auto}>Бренд: {auto.brand}</Typography>
      <Typography sx={styles.auto}>Модель: {auto.model}</Typography>
      <Typography sx={styles.auto}>Рік: {auto.year}</Typography>
      <Typography sx={styles.auto}>VIN код: {auto.vin}</Typography>
      <Typography sx={styles.auto}>Двигун: {auto.engine}</Typography>
      <Typography sx={styles.auto}>Об'єм двигуна: {auto.volume}L</Typography>
    </>
  );
};

export default Auto;
