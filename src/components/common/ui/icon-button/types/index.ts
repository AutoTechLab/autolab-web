export type IconButtonSize = 'small' | 'medium';

export type IconButtonVariant = 'contained' | 'outlined';

export interface ButtonColors {
  contained: Colors;
  outlined: Colors;
}

interface Colors {
  default: {
    color: string;
    border: string;
  };
  hover: {
    color: string;
    border: string;
  };
  active: {
    color: string;
    border: string;
  };
  focused: {
    color: string;
    border: string;
  };
  disabled: {
    color: string;
    border: string;
  };
}
