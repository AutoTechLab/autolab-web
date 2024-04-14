import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { IconButton, IconButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './TrashButton.styles';

interface TrashButtonProps extends IconButtonProps {
  sx?: SxProps<Theme>;
}

const TrashButton: FC<TrashButtonProps> = ({ sx = {}, ...props }) => {
  return (
    <IconButton disableRipple sx={mergeSx(styles.button, sx)} {...props}>
      <TrashIcon />
    </IconButton>
  );
};

export default TrashButton;
