const dropdownMenu = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'darker'),
      backgroundColor: (get) => get('colorScheme', 'white'),
      borderColor: (get) => get('colorScheme', 'darkerBoxShadow'),
    },
  },
  fontSize: {
    default: '1rem',
  },
  padding: {
    default: '0.5rem 0',
  },
  margin: {
    default: '0.125rem 0 0',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  border: (get) => get('globals', 'border'),
};

export { dropdownMenu };
