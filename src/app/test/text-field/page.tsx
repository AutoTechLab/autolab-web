import { FC } from 'react';
import { Box } from '@mui/material';

import TextField from '@/components/common/ui/forms/text-field';
import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';

const TextFieldPage: FC = () => {
  return (
    <Box sx={{ p: '20px' }}>
      <TextField
        color={TextFieldColor.BLACK}
        label={'Label'}
        helperText="This is an error"
        password
      />
      <TextField
        color={TextFieldColor.WHITE}
        label={'Label'}
        helperText="This is an error"
        password
      />
    </Box>
  );
};

export default TextFieldPage;
