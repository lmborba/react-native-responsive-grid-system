import {useDimensions} from "react-native-responsive-ui";

const LG_WIDTH = 1024;
const MD_WIDTH = 768;
const SM_WIDTH = 418;
const XS_WIDTH = 0;

export const widthToSize (width) =>  {
  if (width >= LG_WIDTH) {
    return 'lg';
  } else if (width >= MD_WIDTH) {
    return 'md';
  } else if (width >= SM_WIDTH) {
    return 'sm';
  } else {
    return 'xs';
  }
    
  return children;
};

const queries = {
  'xs': {minWidth: XS_WIDTH, maxWidth: SM_WIDTH-1},
  'sm': {minWidth: SM_WIDTH, maxWidth: MD_WIDTH-1},
  'md': {minWidth: MD_WIDTH, maxWidth: LG_WIDTH-1},
  'lg': {minWidth: LG_WIDTH}
}

export const queryFromCode = (code) => {
  return queries[code];
}
