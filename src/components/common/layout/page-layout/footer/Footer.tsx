import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Logo from '@/components/common/icons/Logo';
import FooterColumn from '@/components/common/layout/page-layout/footer/components/links-column';
import {
  info,
  links,
} from '@/components/common/layout/page-layout/footer/constants';

import * as styles from './Footer.styles';

const Footer: FC = () => {
  return (
    <Box sx={styles.wrapper} component="footer">
      <Box sx={styles.textLogo}>
        <Logo />
        <Typography sx={styles.text}>AUTOLAB</Typography>
      </Box>
      <Box sx={styles.columns}>
        <FooterColumn column={links} />
        <FooterColumn column={info} />
      </Box>
    </Box>
  );
};

export default Footer;
