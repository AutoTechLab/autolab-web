import { FC } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Link from 'next/link';

import { IconPlace } from '@/components/common/ui/arrow-link/types';
import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './ArrowLink.styles';

interface ArrowLinkProps {
  text: string;
  href: string;
  iconPlace?: IconPlace;
  icon?: React.ReactNode;
  target?: string;
  sx?: SxProps<Theme>;
}

const ArrowLink: FC<ArrowLinkProps> = ({
  text,
  href,
  iconPlace = 'left',
  icon = <ChevronLeftIcon />,
  target,
  sx = {},
}) => {
  return (
    <Box sx={mergeSx(styles.wrapper, sx)}>
      <Link href={href} target={target}>
        {iconPlace === 'left' && icon}
        <Typography typography="body1Bold">{text}</Typography>
        {iconPlace === 'right' && icon}
      </Link>
    </Box>
  );
};

export default ArrowLink;
