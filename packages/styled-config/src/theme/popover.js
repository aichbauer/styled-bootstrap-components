import { utils } from './utils';

const popover = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'white'),
      borderColor: (get) => get('colorScheme', 'dark25Alpha'),
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
