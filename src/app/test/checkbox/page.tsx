import { Box } from '@mui/material';

import Checkbox from '@/components/common/ui/forms/checkbox';

const CheckboxPage = () => {
  return (
    <Box sx={{ p: '20px' }}>
      <Box>
        <Checkbox label="label" />
        <Checkbox label="label" disabled checked />
        <Checkbox label="label" color="error" />
        <Checkbox />
        <Checkbox disabled checked />
        <Checkbox color="error" />
      </Box>
      <Box>
        <Checkbox label="label" variant="black" />
        <Checkbox label="label" disabled variant="black" />
        <Checkbox label="label" color="error" variant="black" />
        <Checkbox />
        <Checkbox disabled variant="black" />
        <Checkbox color="error" variant="black" />
      </Box>
    </Box>
  );
};

export default CheckboxPage;
