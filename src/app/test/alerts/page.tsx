import { Box } from '@mui/material';

import Alert from '@/components/common/ui/alert';

const Page = () => {
  return (
    <Box sx={{ height: '1000px', display: 'flex', gap: '10px' }}>
      <Box>
        <Alert title={'sukasukasukasukasuka'} severity="error" />
        <Alert title={'sukasukasukasukasuka'} severity="warning" />
        <Alert title={'sukasukasukasukasuka'} severity="info" />
        <Alert title={'sukasukasukasukasuka'} severity="success" />
      </Box>
      <Box>
        <Alert
          title={'sukasukasukasukasuka'}
          severity="error"
          variant="filled"
        />
        <Alert
          title={'sukasukasukasukasuka'}
          severity="warning"
          variant="filled"
        />
        <Alert
          title={'sukasukasukasukasuka'}
          severity="info"
          variant="filled"
        />
        <Alert
          title={'Підарасіна ти куди лізеш'}
          severity="success"
          variant="filled"
        />
      </Box>
      <Box>
        <Alert
          title={'sukasukasukasukasuka'}
          severity="error"
          variant="outlined"
        />
        <Alert
          title={'sukasukasukasukasuka'}
          severity="warning"
          variant="outlined"
        />
        <Alert
          title={'sukasukasukasukasuka'}
          severity="info"
          variant="outlined"
        />
        <Alert
          title={'sukasukasukasukasuka'}
          severity="success"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Page;
