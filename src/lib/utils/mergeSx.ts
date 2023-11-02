import { SxProps, Theme } from '@mui/material/styles';

const mergeSx = (...sxProps: SxProps<Theme>[]): SxProps<Theme> => {
  return sxProps
    .filter((sxProp) => sxProp)
    .reduce((acc, sxProp) => {
      return [
        ...(Array.isArray(acc) ? acc : [acc]),
        ...(Array.isArray(sxProp) ? sxProp : [sxProp]),
      ];
    }, [] as SxProps<Theme>);
};

export default mergeSx;
