import { utils } from './utils';

const tooltipInner = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'white'),
      backgroundColor: (get) => get('colorScheme', 'darker'),
    },
  },
  padding: {
    default: '0.25rem 0.5rem',
  },
  borderRadius: utils.borderRadius,
};

export { tooltipInner };
