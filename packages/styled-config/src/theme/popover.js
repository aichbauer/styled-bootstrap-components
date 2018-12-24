import { colors } from './colors';
import { utils } from './utils';

const popover = {
  colors: {
    default: {
      backgroundColor: colors.white,
      borderColor: colors.modalBorder,
    },
  },
  fontWeight: {
    default: '400',
  },
  margin: {
    topBottom: '0.5rem',
    leftRight: '0.5rem',
    bottomTop: '0.5rem',
    rightLeft: '0.5rem',
  },
  fontFamily: {
    default: ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
  fontSize: utils.fontSize,
};

export { popover };
