import { colors } from './colors';
import { utils } from './utils';

const popoverHeader = {
  colors: {
    default: {
      backgrondColor: colors.popoverHeaderBackgroundColor,
      borderBottomColor: colors.popoverHeaderBorderColor,
    },
  },
  padding: {
    default: '0.5rem 0.75rem',
  },
  margin: {
    bottom: '0',
    top: '0',
    beforeLeft: '-0.5rem',
  },
  border: utils.border,
  fontSize: utils.fontSize,
};

export { popoverHeader };
