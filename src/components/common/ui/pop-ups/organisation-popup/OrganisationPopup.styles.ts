import { SxProps, Theme } from '@mui/material/styles';

export const modal: SxProps<Theme> = {
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const window: SxProps<Theme> = {
  zIndex: 10,
  width: '500px',
  backgroundColor: 'white.main',
  px: '40px',
  py: '20px',
  borderRadius: '6px',
  border: '1px solid',
  borderColor: 'grey.500',
  background: 'white.main',
};

export const backdrop: SxProps<Theme> = {
  background: 'rgba(151, 151, 151, 0.40);',
  backdropFilter: 'blur(4px)',
};

export const avatarWrapper: SxProps<Theme> = {
  mt: '20px',
  width: '160px',
  height: '160px',
  position: 'relative',
};

export const buttonIcon: SxProps<Theme> = {
  position: 'absolute',
  right: '0px',
  top: '120px',
  margin: 'auto',
};
