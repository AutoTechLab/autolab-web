import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  padding: '38px 100px',
  width: '100%',
  height: '310px',
  backgroundColor: '#313131',
};

export const textLogo: SxProps<Theme> = {
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
};

export const text: SxProps<Theme> = {
  color: '#fff',
  fontFamily: 'Montserrat',
  fontSize: '28px',
  fontStyle: 'italic',
  fontWeight: 700,
  lineHeight: '140%',
  textTransform: 'uppercase',
};

export const columns: SxProps<Theme> = {
  display: 'flex',
  gap: '80px',
};
