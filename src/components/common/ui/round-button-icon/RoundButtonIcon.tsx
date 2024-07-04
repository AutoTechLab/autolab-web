import { FC, ReactNode } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { IconButton, IconButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './RoundButtonIcon.styles';

interface RoundButtonIconProps extends IconButtonProps {
  sx?: SxProps<Theme>;
  icon?: ReactNode;
}

const RoundButtonIcon: FC<RoundButtonIconProps> = ({
  sx = {},
  icon = <TrashIcon />,
  ...props
}) => {
  return (
    <IconButton disableRipple sx={mergeSx(styles.button, sx)} {...props}>
      {icon}
    </IconButton>
  );
};

export default RoundButtonIcon;
