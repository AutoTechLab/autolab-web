import { Box } from '@mui/material';

import Input from '@/components/common/ui/input/Input';

const Inputs = () => {
  return (
    <Box sx={{ m: '20px' }}>
      <div>
        <h1>White</h1>
        <Input />
        <Input label="1231321" />
        <Input label="1231321" helperText="This is an error" />
        <Input
          value={123}
          disabled
          label="1231321"
          helperText="This is an error"
        />
        <Input error label="1231321" helperText="This is an error" />
        <Input
          placeholder="placeholder"
          label="1231321"
          helperText="This is an error"
        />
        <Input
          password
          placeholder="placeholder"
          label="1231321"
          helperText="This is an error"
        />
      </div>

      <div style={{ backgroundColor: 'grey' }}>
        <h1>Black</h1>
        <Input variant="black" />
        <Input variant="black" label="1231321" />
        <Input variant="black" label="1231321" helperText="This is an error" />
        <Input
          value={123}
          variant="black"
          disabled
          label="1231321"
          helperText="This is an error"
        />
        <Input
          variant="black"
          error
          label="1231321"
          helperText="This is an error"
        />
        <Input
          variant="black"
          placeholder="placeholder"
          label="1231321"
          helperText="This is an error"
        />
        <Input
          variant="black"
          password
          placeholder="placeholder"
          label="1231321"
          helperText="This is an error"
        />
      </div>
    </Box>
  );
};

export default Inputs;
