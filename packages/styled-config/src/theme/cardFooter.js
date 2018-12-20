import { colors } from './colors';
import { utils } from './utils';

const cardFooter = {
  colors: {
    default: {
      background: colors.backgroundCardFooter,
      borderTop: colors.borderCard,
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: utils.border.noRadius,
    default: '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)',
  },
  border: utils.border,
};

export { cardFooter };
