import { FC } from 'react';
import { Box, Snackbar } from '@mui/material';

import Alert from '@/components/common/ui/alert';
import { ToastTypes, ToastVariants } from '@/types/toast';

interface ToastProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type: ToastTypes;
  timer?: number;
  variant?: ToastVariants;
}

const Toast: FC<ToastProps> = ({
  title,
  description,
  open,
  type,
  timer,
  onClose,
  variant = 'standard',
}) => {
  const DEFAULT_TIMER = 5000;

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={timer ?? DEFAULT_TIMER}
      ClickAwayListenerProps={{ onClickAway: () => null }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Box>
        <Alert
          title={title}
          description={description}
          severity={type}
          variant={variant}
        />
      </Box>
    </Snackbar>
  );
};

export default Toast;
