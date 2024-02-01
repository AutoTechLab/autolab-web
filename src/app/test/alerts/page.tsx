'use client';
import { Box } from '@mui/material';

import Alert from '@/components/common/ui/alert';
import Button from '@/components/common/ui/button';
import {
  ButtonColor,
  ButtonIcon,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/types';
import useToast from '@/hooks/use-toast';

const Page = () => {
  const toast = useToast();
  const handleClick = () => {
    toast.success('test', 'lorem 1231312h31312312', 3000, 'filled');
  };
  return (
    <Box sx={{ height: '1000px', display: 'flex', gap: '10px' }}>
      <Box>
        <Alert title={'test'} severity="error" />
        <Alert title={'test'} severity="warning" />
        <Alert title={'test'} severity="info" />
        <Alert title={'test'} severity="success" />
      </Box>
      <Box>
        <Alert title={'test'} severity="error" variant="filled" />
        <Alert title={'test'} severity="warning" variant="filled" />
        <Alert title={'test'} severity="info" variant="filled" />
        <Alert title={'test'} severity="success" variant="filled" />
      </Box>
      <Box>
        <Alert title={'test'} severity="error" variant="outlined" />
        <Alert title={'test'} severity="warning" variant="outlined" />
        <Alert title={'test'} severity="info" variant="outlined" />
        <Alert title={'test'} severity="success" variant="outlined" />
      </Box>
      <Button
        size={ButtonSize.MEDIUM}
        variant={ButtonVariant.CONTAINED}
        color={ButtonColor.PRIMARY}
        icon={ButtonIcon.NONE}
        onClick={handleClick}
      >
        123
      </Button>
    </Box>
  );
};

export default Page;
