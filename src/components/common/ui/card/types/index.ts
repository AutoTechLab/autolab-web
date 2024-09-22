import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

import { Auto } from '@/types/auto';

export interface CardProps {
  avatar?: string;
  name: string;
  description?: string;
  href?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

export interface PositionProps {
  position: string;
}

export interface PriceProps {
  price: string;
}

export interface NumberProps {
  phone: string;
}

export interface AutoProps {
  auto: Auto;
}
