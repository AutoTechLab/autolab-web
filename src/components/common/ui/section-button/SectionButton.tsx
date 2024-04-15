import { FC, ReactNode } from 'react';
import { Button, ButtonProps, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/mergeSx';

import * as styles from './SectionButton.styles';

interface SectionButtonProps extends ButtonProps {
  sx?: SxProps<Theme>;
  children: string;
  icon?: ReactNode;
  isActive?: boolean;
}

const SectionButton: FC<SectionButtonProps> = ({
  sx = {},
  children,
  icon,
  isActive = false,
  ...props
}) => {
  return (
    <Button disableRipple sx={mergeSx(styles.button(isActive), sx)} {...props}>
      {icon}
      <Typography typography="body1Bold" sx={{ height: '22px' }}>
        {children}
      </Typography>
    </Button>
  );
};

export default SectionButton;
