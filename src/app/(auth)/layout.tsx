import { FC } from 'react';
import { Box } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'dark.300',
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default AuthLayout;
