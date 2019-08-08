import { utils } from './utils';

const card = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'white'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { card };
