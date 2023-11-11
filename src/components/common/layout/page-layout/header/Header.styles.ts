import { SxProps, Theme } from '@mui/system';

export const wrapper: SxProps<Theme> = {
  p: '0px 100px',
  width: '100%',
  height: '64px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  backgroundColor: '#fff',

  '&.MuiPaper-root': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  a: {
    p: '6px 10px',
    height: '43px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#1B66AC',
  },
};

export const textLogo: SxProps<Theme> = {
  color: '#5B5B5B',
  fontFamily: 'Montserrat',
  fontSize: '28px',
  fontStyle: 'italic',
  fontWeight: 700,
  lineHeight: '140%',
  textTransform: 'uppercase',
};
