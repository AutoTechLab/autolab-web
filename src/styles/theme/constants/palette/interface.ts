import { Color } from '@mui/material';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    logo?: string;
  }
  interface PaletteColor extends Color {}

  interface Palette {
    gray: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
    dark: Palette['primary'];
    orange: Palette['primary'];
    green: Palette['primary'];
    error: Palette['primary'];
  }
  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    error?: PaletteOptions['primary'];
  }
}
