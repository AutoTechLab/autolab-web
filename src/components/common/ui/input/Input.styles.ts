import { SxProps, Theme } from '@mui/material/styles';

import { InputVariant } from '@/components/common/ui/input/types';

export const formControl = (variant: InputVariant): SxProps<Theme> => ({
  '.MuiInputBase-root': {
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

    '&.MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
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
  }),

  '&.MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
    color: 'dark.600',
  },
});

export const input = (variant: InputVariant): SxProps<Theme> => ({
  p: '10px 14px',
  borderRadius: '10px',
  color: 'white',
  '.MuiInputBase-input': {
    p: 0,

    '&:-webkit-autofill': {
      WebkitTextFillColor: variant === 'white' ? 'gray.300' : 'white',
      transition: 'background-color 5000s ease-in-out 0s',
    },
    '&:-webkit-autofill:hover': {
      WebkitTextFillColor: variant === 'white' ? 'gray.300' : 'white',
      transition: 'background-color 5000s ease-in-out 0s',
    },
    '&:-webkit-autofill:focus': {
      WebkitTextFillColor: variant === 'white' ? 'gray.300' : 'white',
      transition: 'background-color 5000s ease-in-out 0s',
    },
    '&:-webkit-autofill:active': {
      WebkitTextFillColor: variant === 'white' ? 'gray.300' : 'white',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },
});

export const label = (variant: InputVariant): SxProps<Theme> => ({
  typography: 'body1',
  ml: '-10px',
  ...(variant === 'white' && {
    color: 'gray.400',
  }),
  ...(variant === 'black' && {
    color: 'gray.300',
  }),
});

export const helperText = (
  variant: InputVariant,
  error: boolean,
): SxProps<Theme> => ({
  ml: '3px',
  color: variant === 'white' ? 'gray.400' : 'gray.300',
  ...(error && {
    color: variant === 'white' ? 'error.500' : 'error.200',
  }),
});
