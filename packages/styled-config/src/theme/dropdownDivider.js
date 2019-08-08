import { utils } from './utils';

const dropdownDivider = {
  colors: {
    default: {
      borderTop: (get) => get('colorScheme', 'lightDarker'),
    },
  },
  padding: {
    top: '0.5rem',
  },
  margin: {
    top: '0.6rem',
  },
  border: utils.border,
};

export { dropdownDivider };
