import { utils } from './utils';

const breadcrumb = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'lightDarker'),
    },
  },
  padding: {
    default: '0.75rem 1rem',
  },
  margin: {
    bottom: '1rem',
  },
  borderRadius: utils.borderRadius,
};

export { breadcrumb };
