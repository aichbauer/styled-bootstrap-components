import { utils } from './utils';

const modalContent = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'white'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { modalContent };
