import { FC } from 'react';
import {
  Alert as AlertMUI,
  AlertProps as AlertPropsMUI,
  Typography,
} from '@mui/material';

import { iconMapping } from '@/components/common/ui/alert/constants';

import * as styles from './Alert.styles';

interface AlertProps extends AlertPropsMUI {
  title: string;
  description?: string;
}

const Alert: FC<AlertProps> = ({ title, description, ...props }) => {
  return (
    <AlertMUI
      sx={styles.alert(description?.length)}
      iconMapping={iconMapping}
      {...props}
    >
      <Typography typography={description ? 'body1Medium' : 'body2'}>
        {title}
      </Typography>
      {description && <Typography typography="body2">{description}</Typography>}
    </AlertMUI>
  );
};

export default Alert;
