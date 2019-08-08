import { utils } from './utils';

const inputGroupText = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'dark'),
      backgroundColor: (get) => get('colorScheme', 'lightDarker'),
      borderColor: (get) => get('colorScheme', 'lightDark'),
    },
  },
  margin: {
    bottom: '0',
    radioCheckboxTop: '0',
    radioCheckboxRight: '0',
    radioCheckboxBottom: '0.4125rem',
  },
  padding: {
    default: '0.375rem 0.75rem',
  },
  fontWeight: {
    default: '400',
  },
  fontSize: utils.fontSize,
  borderRadius: utils.borderRadius,
  border: utils.border,
};

export { inputGroupText };
