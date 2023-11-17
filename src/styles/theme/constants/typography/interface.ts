import { CSSProperties } from 'react';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    logoSmall: CSSProperties;
    logoMedium: CSSProperties;
    logoLarge: CSSProperties;
    h2: CSSProperties;
    h2Medium: CSSProperties;
    h2Bold: CSSProperties;
    h3: CSSProperties;
    h3Medium: CSSProperties;
    h3Bold: CSSProperties;
    h4: CSSProperties;
    h4Medium: CSSProperties;
    h4Bold: CSSProperties;
    h5: CSSProperties;
    h5Medium: CSSProperties;
    h5Bold: CSSProperties;
    h6: CSSProperties;
    h6Medium: CSSProperties;
    h6Bold: CSSProperties;
    body1: CSSProperties;
    body1Medium: CSSProperties;
    body1Bold: CSSProperties;
    body2: CSSProperties;
    body2Medium: CSSProperties;
    body2Bold: CSSProperties;
    body3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    logoSmall?: CSSProperties;
    logoMedium?: CSSProperties;
    logoLarge?: CSSProperties;
    h2?: CSSProperties;
    h2Medium?: CSSProperties;
    h2Bold?: CSSProperties;
    h3?: CSSProperties;
    h3Medium?: CSSProperties;
    h3Bold?: CSSProperties;
    h4?: CSSProperties;
    h4Medium?: CSSProperties;
    h4Bold?: CSSProperties;
    h5?: CSSProperties;
    h5Medium?: CSSProperties;
    h5Bold?: CSSProperties;
    h6?: CSSProperties;
    h6Medium?: CSSProperties;
    h6Bold?: CSSProperties;
    body1?: CSSProperties;
    body1Medium?: CSSProperties;
    body1Bold?: CSSProperties;
    body2?: CSSProperties;
    body2Medium?: CSSProperties;
    body2Bold?: CSSProperties;
    body3?: CSSProperties;
  }
}
