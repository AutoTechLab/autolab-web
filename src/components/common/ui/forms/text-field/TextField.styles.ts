import { SxProps, Theme } from '@mui/material/styles';

export const input: SxProps<Theme> = {
  borderRadius: '10px',
  border: '2px solid #CECECE',
  '& .MuiInputBase-input, .MuiInputBase-inputMultiline': {
    p: '6px 14px',
    color: '#CECECE',
    '&::placeholder': {
      color: '#CECECE',
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '140%',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
