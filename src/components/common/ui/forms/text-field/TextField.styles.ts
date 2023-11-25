import { SxProps, Theme } from '@mui/material/styles';

import { TextFieldColor } from '@/components/common/ui/forms/text-field/types';

export const textField = (color: TextFieldColor): SxProps<Theme> => ({
  ...(color === TextFieldColor.WHITE && {
    '& .MuiInputBase-input': {
      borderRadius: '10px',
      p: '11px 16px',
      typography: 'body1',
      '&::placeholder': {
        color: 'gray.400',
        opacity: 1,
        '&:hover': {
          color: 'gray.200',
        },
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid',
      borderRadius: '10px',
      borderColor: 'gray.400',
    },
    '& .MuiInputLabel-root': {
      color: 'gray.400',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.200',
      },
      '& .MuiInputLabel-root': {
        color: 'gray.200',
      },
    },
    '&:active': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.200',
      },
      '& .MuiInputLabel-root': {
        color: 'dark.600',
      },
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'dark.600',
      },
      '& .MuiInputLabel-root': {
        color: 'black.main',
      },
    },
    '& .Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'error.500',
      },
      color: 'black.main',
    },
    '& .Mui-disabled': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.400',
        backgroundColor: 'rgba(187, 187, 187, 0.20)',
      },
    },
  }),
  ...(color === TextFieldColor.BLACK && {
    '& .MuiInputBase-input': {
      borderRadius: '10px',
      p: '11px 16px',
      typography: 'body1',
      '&:hover': {
        color: 'gray.100',
      },
      '&:focused': {
        color: 'white.main',
      },
      '&::placeholder': {
        color: 'gray.400',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid',
      borderRadius: '10px',
      borderColor: 'gray.300',
    },
    '& .MuiInputLabel-root': {
      color: 'gray.300',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.400',
      },
      '& .MuiInputLabel-root': {
        color: 'gray.400',
      },
    },
    '&:active': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.400',
      },
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'dark.600',
      },
      '& .MuiInputLabel-root': {
        color: 'black.main',
      },
    },
    '& .Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'error.200',
      },
      '& .MuiInputLabel-root': {
        color: 'white.main',
      },
    },
    '& .Mui-disabled': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.100',
      },
      '& .MuiInputLabel-root': {
        color: 'gray.100',
      },
    },
  }),
});
