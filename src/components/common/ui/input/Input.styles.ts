import { SxProps, Theme } from '@mui/material/styles';

import { InputVariant } from '@/components/common/ui/input/types';

export const formControl = (variant: InputVariant): SxProps<Theme> => ({
  '.MuiInputBase-root': {
    m: '10px 0 0 0',
    border: '2px solid',
    borderColor: 'gray.400',

    '.MuiInputBase-input': {
      '&::placeholder': {
        color: 'gray.400',
      },
    },
  },

  ...(variant === 'white' && {
    '.MuiFormLabel-root': {
      color: 'gray.400',
    },

    '&:hover': {
      '.MuiInputBase-root:not(.Mui-disabled):not(.Mui-error)': {
        borderColor: 'gray.200',
      },
      '.MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error)': {
        color: 'gray.200',
      },
    },

    '.Mui-focused': {
      '.MuiInputBase-root': {
        borderColor: 'dark.600',
      },
      '.MuiFormLabel-root': {
        color: 'dark.600',
      },
    },

    '&:active': {
      '.MuiInputBase-root:not(.Mui-disabled):not(.Mui-error)': {
        borderColor: 'gray.200',
      },
      '.MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error)': {
        color: 'gray.200',
      },
    },

    '.Mui-disabled': {
      '&.MuiInputBase-root': {
        backgroundColor: 'rgba(187, 187, 187, 0.20)',
      },
      '.MuiFormLabel-root': {
        color: 'gray.400',
        backgroundColor: 'transparent',
      },
      '.MuiInputBase-input': {
        backgroundColor: 'transparent',
      },
    },

    '.Mui-error': {
      '&.MuiInputBase-root': {
        borderColor: 'error.500',
      },

      '&.MuiFormLabel-root': {
        color: 'error.500',
      },
    },

    '.MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: 'dark.600',
    },
  }),

  ...(variant === 'black' && {
    '.MuiInputBase-root': {
      m: '10px 0 0 0',
      border: '2px solid',
      borderColor: 'gray.300',

      '.MuiInputBase-input': {
        color: 'white.main',
        '&::placeholder': {
          color: 'white.main',
        },
      },
    },

    '.MuiFormLabel-root': {
      color: 'gray.300',
    },

    '&:hover': {
      '.MuiInputBase-root:not(.Mui-disabled):not(.Mui-error)': {
        borderColor: 'gray.400',
      },
      '.MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error)': {
        color: 'gray.400',
      },
    },

    '.Mui-focused': {
      '.MuiInputBase-root': {
        borderColor: 'gray.400',
      },
      '.MuiFormLabel-root': {
        color: 'white.main',
      },
    },

    '&:active': {
      '.MuiInputBase-root:not(.Mui-disabled):not(.Mui-error)': {
        borderColor: 'gray.400',
      },
      '.MuiFormLabel-root:not(.Mui-disabled):not(.Mui-error)': {
        color: 'gray.400',
      },
    },

    '.Mui-disabled': {
      '&.MuiInputBase-root': {
        borderColor: 'gray.100',
      },
      '&.MuiFormLabel-root': {
        color: 'gray.100',
        backgroundColor: 'transparent',
      },
      '.MuiInputBase-input': {
        backgroundColor: 'transparent',
      },
    },

    '.Mui-error': {
      '&.MuiInputBase-root': {
        borderColor: 'error.200',
      },

      '&.MuiFormLabel-root': {
        color: 'white',
      },
    },

    '.MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: 'dark.600',
    },
  }),
});

export const input: SxProps<Theme> = {
  p: '10px 14px',
  borderRadius: '10px',

  '.MuiInputBase-input': {
    p: 0,
  },
};

export const label: SxProps<Theme> = {
  typography: 'body1',
  ml: '-10px',
};

export const helperText = (
  variant: InputVariant,
  error: boolean,
): SxProps<Theme> => ({
  ml: '3px',
  ...(error && {
    color: variant === 'white' ? 'error.500' : 'error.200',
  }),
});
