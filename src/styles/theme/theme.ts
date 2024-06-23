import { createTheme } from '@mui/material/styles';

import breakpoints from '@/styles/theme/constants/brakepoints';
import palette from '@/styles/theme/constants/palette';
import typography from '@/styles/theme/constants/typography';

const theme = createTheme({
  palette,
  typography,
  breakpoints,
});

export default theme;
