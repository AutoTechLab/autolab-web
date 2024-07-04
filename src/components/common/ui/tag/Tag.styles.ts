import { SxProps, Theme } from '@mui/material/styles';

import { ITagColors } from '@/components/common/ui/tag/types';

export const wrapper = (color: ITagColors): SxProps<Theme> => ({
  p: '2px 10px',
  color: 'black',
  float: 'left',
  borderRadius: '6px',
  ...(color === 'green' && {
    backgroundColor: 'green.800',
  }),
  ...(color === 'blue' && {
    backgroundColor: 'blue.500',
  }),
  ...(color === 'orange' && {
    backgroundColor: 'yellow.500',
  }),
});
