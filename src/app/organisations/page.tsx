import { Box, Typography } from '@mui/material';

import IconButton from '@/components/common/ui/icon-button/IconButton';
import Input from '@/components/common/ui/input/Input';

import * as styles from './Organisations.styles';

const Organisations = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography mt="48px" typography="h5Medium">
        Мої організації
      </Typography>

      <Box sx={styles.search}>
        <Input sx={styles.input} isSearch fullWidth placeholder="Пошук" />
        <IconButton />
      </Box>
    </Box>
  );
};

export default Organisations;
