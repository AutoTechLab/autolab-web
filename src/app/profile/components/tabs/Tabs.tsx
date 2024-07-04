'use client';

import { FC } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { tabs } from '@/app/profile/components/tabs/constants';

import * as styles from './Tabs.styles';

const Tabs: FC = () => {
  const searchParams = useSearchParams();
  const curTab = searchParams.get('tab');

  return (
    <Box sx={styles.wrapper}>
      <Stack flexDirection="row" gap="10px">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href} passHref>
            <Box sx={styles.tab(tab.name === curTab)}>
              <Typography typography="body1">{tab.label}</Typography>
            </Box>
          </Link>
        ))}
      </Stack>
      <Divider sx={styles.divider} />
      {tabs.find((tab) => tab.name === curTab)?.component}
    </Box>
  );
};

export default Tabs;
