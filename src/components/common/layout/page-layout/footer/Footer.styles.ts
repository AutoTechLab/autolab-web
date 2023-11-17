import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  padding: '38px 100px',
  height: '310px',
  backgroundColor: 'dark.300',
};

export const textLogo: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
};

export const text: SxProps<Theme> = {
  color: 'white.main',
  typography: 'logoSmall',
};

export const columns: SxProps<Theme> = {
  display: 'flex',
  gap: '80px',
};
