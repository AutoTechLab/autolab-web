import { FC } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Link from 'next/link';

import { ArrowVariant } from '@/components/common/ui/arrow-link/types';
import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './ArrowLink.styles';

interface ArrowLinkProps {
  text: string;
  href: string;
  arrow?: ArrowVariant;
  target?: string;
  sx?: SxProps<Theme>;
}

const ArrowLink: FC<ArrowLinkProps> = ({
  text,
  href,
  arrow = ArrowVariant.LEFT,
  target,
  sx = {},
}) => {
  return (
    <Link href={href} target={target}>
      <Box sx={mergeSx(styles.wrapper, sx)}>
        {arrow === ArrowVariant.LEFT && (
          <ChevronLeftIcon height={24} width={24} />
        )}
        <Typography typography="h6Bold">{text}</Typography>
        {arrow === ArrowVariant.RIGHT && (
          <ChevronRightIcon height={24} width={24} />
        )}
      </Box>
    </Link>
  );
};

export default ArrowLink;
