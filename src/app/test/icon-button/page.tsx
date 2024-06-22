import { Box } from '@mui/material';

import IconButton from '@/components/common/ui/icon-button/IconButton';

const Page = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <IconButton size={'small'} />
      <IconButton />
      <IconButton disabled />
      <IconButton variant="outlined" size={'small'} />
      <IconButton variant="outlined" />
      <IconButton variant="outlined" disabled />
    </Box>
  );
};

export default Page;
