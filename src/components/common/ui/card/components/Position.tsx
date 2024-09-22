import { FC } from 'react';

import Tag from '@/components/common/ui/tag';

import type { PositionProps } from '../types';

const Position: FC<PositionProps> = ({ position }) => (
  <Tag text={position} color="orange" />
);

export default Position;
