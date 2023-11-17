import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/mergeSx';

import { LinkButtonPlace } from './types/index';
import * as styles from './LinkButton.styles';

interface LinkButtonProps extends ButtonProps {
  place: LinkButtonPlace;
  sx?: SxProps<Theme>;
  children: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  place,
  sx,
  children,
  href,
  ...rest
}) => {
  return (
    <>
      {sx ? (
        <Button
          sx={mergeSx(styles.linkButton(place), sx)}
          href={href}
          {...rest}
        >
          {children}
        </Button>
      ) : (
        <Button sx={styles.linkButton(place)} href={href} {...rest}>
          {children}
        </Button>
      )}
    </>
  );
};

export default LinkButton;
