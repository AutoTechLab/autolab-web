import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Link from 'next/link';

import mergeSx from '@/lib/utils/mergeSx';

import { LinkButtonPlace } from './types/index';
import * as styles from './LinkButton.styles';

interface LinkButtonProps extends ButtonProps {
  place: LinkButtonPlace;
  sx?: SxProps<Theme>;
  children: string;
  href: string;
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
        <Link href={href}>
          <Button sx={mergeSx(styles.linkButton(place), sx)} {...rest}>
            {children}
          </Button>
        </Link>
      ) : (
        <Link href={href}>
          <Button sx={styles.linkButton(place)} {...rest}>
            {children}
          </Button>
        </Link>
      )}
    </>
  );
};

export default LinkButton;
