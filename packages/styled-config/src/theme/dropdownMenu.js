import { colors } from './colors';
import { utils } from './utils';

const dropdownMenu = {
  colors: {
    default: {
      color: colors.gray900,
      backgroundColor: colors.white,
      borderColor: colors.gray900BoxShadow,
    },
  },
  fontSize: {
    default: '1rem',
  },
  padding: {
    default: '0.5rem 0',
  },
  margin: {
    default: '0.125rem 0 0',
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { dropdownMenu };
