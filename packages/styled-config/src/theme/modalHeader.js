import { utils } from './utils';

const modalHeader = {
  colors: {
    default: {
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  padding: {
    default: '1rem',
  },
  border: utils.border,
  borderRadius: utils.borderRadius,
};

export { modalHeader };
