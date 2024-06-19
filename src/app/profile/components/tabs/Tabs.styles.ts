import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  mt: '12px',
};

export const divider: SxProps<Theme> = {
  mt: '8px',
  mb: '12px',
  height: '2px',
  backgroundColor: 'orange.500',
};

export const tab = (isCurTab: boolean): SxProps<Theme> => ({
  p: '12px 24px',

  ...(isCurTab && {
    color: 'orange.400',
    '.MuiTypography-body1': {
      borderBottom: '1px solid',
      borderColor: 'orange.400',
    },
  }),
});

export const organisations: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

export const noOrganisations: SxProps<Theme> = {
  my: '60px',
  maxWidth: '700px',
  gap: '16px',
  textAlign: 'center',
  p: '24px 36px',

  borderRadius: '6px',
  border: '1.5px solid',
  borderColor: 'gray.700',
  boxShadow: '4px 4px 6px 0px rgba(0, 0, 0, 0.25)',
};
