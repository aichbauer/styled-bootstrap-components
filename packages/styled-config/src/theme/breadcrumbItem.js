import { utils } from './utils';

const breadcrumbItem = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'secondary'),
    },
  },
  padding: {
    right: '0.5rem',
    left: '0.5rem',
  },
  margin: {
    bottom: '1rem',
  },
  borderRadius: utils.borderRadius,
};

export { breadcrumbItem };
