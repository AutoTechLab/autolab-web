import { Box } from '@mui/material';

import ArrowLink from '@/components/common/ui/arrow-link';
import { ArrowVariant } from '@/components/common/ui/arrow-link/types';

const Page = () => {
  return (
    <Box sx={{ backgroundColor: 'dark.400', height: '400px' }}>
      <ArrowLink
        href={'/'}
        text={'Повернутись до авторизації'}
        arrow={ArrowVariant.RIGHT}
      />
    </Box>
  );
};

export default Page;
