import { SxProps, Theme } from '@mui/material/styles';

export const alert = (length: number | undefined): SxProps<Theme> => ({
  borderRadius: '4px',
  p: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  justifyContent: 'center',
  '&.MuiPaper-root': {
    height: !!length ? '72px' : '48px',
  },
  '.MuiAlert-message': {
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  '&.MuiAlert-standard': {
    color: 'black.main',
  },
  '&.MuiAlert-standardError': {
    backgroundColor: 'error.700',
    '& .MuiAlert-icon': {
      color: 'error.100',
    },
  },
  '&.MuiAlert-standardWarning': {
    backgroundColor: '#F5A766',
    '& .MuiAlert-icon': {
      color: 'orange.200',
    },
  },
  '&.MuiAlert-standardInfo': {
    backgroundColor: '#ACD6EE',
    '& .MuiAlert-icon': {
      color: '#0288D1',
    },
  },
  '&.MuiAlert-standardSuccess': {
    backgroundColor: 'green.800',
    '& .MuiAlert-icon': {
      color: 'green.100',
    },
  },

  '&. MuiAlert-filled': {
    color: 'white.main',
    '&.MuiAlert-icon': {
      color: 'white.main',
    },
  },
  '&.MuiAlert-filledError': {
    backgroundColor: 'error.300',
  },
  '&.MuiAlert-filledWarning': {
    backgroundColor: '#EF6C00',
  },
  '&.MuiAlert-filledInfo': {
    backgroundColor: '#0288D1',
  },
  '&.MuiAlert-filledSuccess': {
    backgroundColor: 'green.300',
  },

  '&.MuiAlert-outlined': {
    border: '2px solid',
  },
  '&.MuiAlert-outlinedError': {
    borderColor: 'error.200',
    color: 'error.200',
    svg: {
      color: 'error.200',
    },
  },
  '&.MuiAlert-outlinedWarning': {
    borderColor: '#EF6C00',
    color: '#EF6C00',
  },
  '&.MuiAlert-outlinedInfo': {
    borderColor: '#0288D1',
    color: '#0288D1',
  },
  '&.MuiAlert-outlinedSuccess': {
    borderColor: 'green.300',
    color: 'green.300',
  },
});
