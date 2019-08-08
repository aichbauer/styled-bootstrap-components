import { utils } from './utils';

const cardHeader = {
  colors: {
    default: {
      background: (get) => get('colorScheme', 'white'),
      borderBottom: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: utils.borderRadius.noRadius,
    topLeftRight: 'calc(0.25rem - 1px)',
  },
  border: utils.border,
};

export { cardHeader };
