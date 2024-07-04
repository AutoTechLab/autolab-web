import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import Logo from '@/components/common/icons/Logo';
import Button from '@/components/common/ui/button';
import { LogoVariant } from '@/types/logo';

import * as styles from './SideSection.styles';

interface SideSectionProps {
  text: 'login' | 'register';
  link: string;
}

const SideSection: FC<SideSectionProps> = ({ text, link }) => {
  const question = text === 'login' ? 'Не маєш акаунту?' : 'Вже маєш акаунт?';
  const linkText = text === 'login' ? 'Зареєструватись' : 'Увійти';
  return (
    <Box sx={styles.section}>
      <Box sx={styles.title}>
        <Logo color="black" size={LogoVariant.MEDIUM} />
        <Typography>AUTOLAB</Typography>
      </Box>
      <Typography sx={styles.question}>{question}</Typography>
      <Link
        style={{ padding: 0, alignSelf: 'center', textDecoration: 'none' }}
        href={link}
      >
        <Button variant="outlined" color="secondary">
          {linkText}
        </Button>
      </Link>
    </Box>
  );
};

export default SideSection;
