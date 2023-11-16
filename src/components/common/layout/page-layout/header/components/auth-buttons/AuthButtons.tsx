import { FC } from 'react';
import { Box, Button } from '@mui/material';

import * as styles from './AuthButtons.styles';

const AuthButtons: FC = () => {
  return (
    <Box sx={styles.auth}>
      <Button variant="outlined" sx={styles.signin} href="/login">
        Увійти
      </Button>
      <Button variant="contained" sx={styles.signup} href="/register">
        Зареєструватись
      </Button>
    </Box>
  );
};

export default AuthButtons;
