import { utils } from './utils';

const modalFooter = {
  colors: {
    default: {
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  padding: {
    default: '1rem',
  },
  border: utils.border,
};

export { modalFooter };
