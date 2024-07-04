import { SxProps, Theme } from '@mui/material/styles';

export const modal: SxProps<Theme> = {
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
export const window: SxProps<Theme> = {
  width: '720px',
  display: 'flex',
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
  height: '160px',
  position: 'relative',
};

export const buttonIcon: SxProps<Theme> = {
  position: 'absolute',
  right: '30px',
  top: '120px',
  margin: 'auto',
};

export const rightSection: SxProps<Theme> = {
  p: '20px 40px',
  width: '500px',
  backgroundColor: 'white.main',
};

export const editHeader: SxProps<Theme> = {
  mb: '20px',
  svg: {
    width: '24px',
    height: '24px',
    color: 'orange.200',
  },
};
