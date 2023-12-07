import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '1064px',
  height: '648px',
  backgroundColor: 'dark.400',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  overflow: 'hidden',
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundImage: 'url("/svgs/rectangle-reversed.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    pl: '80px',
  },
  a: {
    alignSelf: 'flex-start',
    color: 'orange.500',
    typography: 'body2',
    mb: '48px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};
