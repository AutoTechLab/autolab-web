import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  height: '364px',
  width: '387px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center',
  padding: '36px 40px',
  gap: '16px',
  border: '2px solid',
  borderRadius: '10px',
  borderColor: 'gray.400',
};

export const title: SxProps<Theme> = {
  typography: 'h5Bold',
};
export const text: SxProps<Theme> = {
  typography: 'body1',
  color: 'dark.300',
};

export const iconBox: SxProps<Theme> = {
  height: '60px',
  width: '60px',
};
