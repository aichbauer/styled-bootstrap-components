import { colors } from './colors';
import { utils } from './utils';

const cardHeader = {
  colors: {
    default: {
      background: colors.backgroundCard,
      borderBottom: colors.borderCard,
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: utils.border.noRadius,
    topLeftRight: 'calc(0.25rem - 1px)',
  },
  border: utils.border,
};

export { cardHeader };
