'use client';
import { FC } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { tabs } from '@/app/organisations/[id]/components/organisation-bar/constants';
import Button from '@/components/common/ui/button';

import * as styles from './OrganisationBar.styles';

interface OrganisationBarProps {}

const OrganisationBar: FC<OrganisationBarProps> = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const curTab = searchParams.get('tab');

  return (
    <Box sx={styles.wrapper}>
      {tabs.map((tab) => (
        <Link key={tab.href} href={`${pathname}?tab=${tab.href}`} passHref>
          <Button
            sx={styles.button(curTab === tab.href)}
            variant="text"
            size="small"
          >
            {tab.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default OrganisationBar;
