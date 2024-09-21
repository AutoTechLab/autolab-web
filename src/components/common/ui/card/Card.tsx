'use client';
import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Link from 'next/link';

import Position from '@/components/common/ui/card/components/Position';
import Price from '@/components/common/ui/card/components/Price';
import RoundButtonIcon from '@/components/common/ui/round-button-icon';
import useToast from '@/hooks/use-toast';
import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './Card.styles';
import type { CardProps } from './types';

const CardComponent: FC<CardProps> = ({
  avatar,
  name,
  description = '',
  href = '',
  children,
  sx = {},
}) => {
  const toast = useToast();
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toast.success('Deleted', '', 3000);
  };

  return (
    <Box sx={mergeSx(styles.wrapper, sx)}>
      <Link href={href}>
        <Box sx={styles.box}>
          <Box sx={styles.content}>
            <Box sx={styles.title}>
              <Box sx={styles.info}>
                {avatar && <Avatar src={avatar} sx={styles.avatar} />}
                <Box sx={styles.heading}>
                  <Typography typography="h6Bold">{name}</Typography>
                  {children}
                </Box>
              </Box>
            </Box>
            {description && (
              <Typography sx={styles.description}>{description}</Typography>
            )}
          </Box>
          <RoundButtonIcon sx={styles.button} onClick={handleDelete} />
        </Box>
      </Link>
    </Box>
  );
};

export const Card = Object.assign(CardComponent, { Position, Price });

export { CardComponent, Position, Price };
