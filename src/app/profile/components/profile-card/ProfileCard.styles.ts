import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  p: '28px',
  maxWidth: '100%',
  height: '243px',
  display: 'flex',
  justifyContent: 'space-between',

  borderRadius: '6px',
  border: '1.5px solid',
  borderColor: 'grey.400',
  backgroundColor: 'white',
  boxShadow: '4px 4px 6px 0px rgba(0, 0, 0, 0.15)',
};

export const info: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '36px',
};

export const avatar: SxProps<Theme> = {
  width: '160px',
  height: '160px',
};

export const iconInfo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  mb: '10px',
  svg: {
    width: '24px',
    height: '24px',
    color: 'orange.100',
  },
};

export const modal: SxProps<Theme> = {
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
export const window: SxProps<Theme> = {
  width: '720px',
  height: '550px',
  backgroundColor: 'red',
};

export const backdrop: SxProps<Theme> = {
  background: 'rgba(151, 151, 151, 0.40);',
  backdropFilter: 'blur(4px)',
};

export const leftSection: SxProps<Theme> = {
  width: '220px',
  height: '100%',
  p: '20px 0',
  backgroundColor: 'gray.700',

  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '.MuiAvatar-root': {
    width: '160px',
    height: '160px',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
  },
};

export const avatarWrapper: SxProps<Theme> = {
  width: '220px',
  position: 'relative',
};

export const buttonIcon: SxProps<Theme> = {
  position: 'absolute',
  right: '30px',
  top: '120px',
  margin: 'auto',
};
