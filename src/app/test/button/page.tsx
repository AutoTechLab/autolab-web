import React from 'react';
import { Box } from '@mui/material';

import Button from '@/components/common/ui/button';

const ButtonPage = () => {
  return (
    <Box>
      {/* Contained Buttons */}
      <Box>
        {/* Large size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button size="large" icon="left" disabled={true}>
            Button
          </Button>
          <Button size="large" icon="right">
            Button
          </Button>
          <Button size="large">Button</Button>
        </Box>
        {/* Medium size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button icon="left">Button</Button>
          <Button icon="right">Button</Button>
          <Button>Button</Button>
        </Box>
        {/* Small size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button size="small" icon="left">
            Button
          </Button>
          <Button size="small" icon="right">
            Button
          </Button>
          <Button size="small">Button</Button>
        </Box>
      </Box>
      {/* Outlined Buttons */}
      <Box>
        {/* Large size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button size="large" variant="outlined" icon="left" disabled={true}>
            Button
          </Button>
          <Button size="large" variant="outlined" icon="right" color="primary">
            Button
          </Button>
          <Button size="large" variant="outlined" color="primary" icon="none">
            Button
          </Button>
        </Box>
        {/* Medium size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button size="medium" variant="outlined" icon="left" color="primary">
            Button
          </Button>
          <Button size="medium" variant="outlined" icon="right" color="primary">
            Button
          </Button>
          <Button size="medium" variant="outlined" color="primary">
            Button
          </Button>
        </Box>
        {/* Small size */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
            gap: '20px',
          }}
        >
          <Button size="small" variant="outlined" icon="left" color="primary">
            Button
          </Button>
          <Button size="small" variant="outlined" icon="right" color="primary">
            Button
          </Button>
          <Button size="small" variant="outlined" color="primary">
            Button
          </Button>
          <Button size="small" variant="text">
            Button
          </Button>{' '}
          <Button disabled size="small" variant="text">
            Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ButtonPage;
