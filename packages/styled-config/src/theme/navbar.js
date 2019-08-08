const navbar = {
  colors: {
    dark: {
      color: (get) => get('colorScheme', 'white50Alpha'),
      borderColor: (get) => get('colorScheme', 'white10Alpha'),
      backgroundColor: (get) => get('colorScheme', 'dark'),
    },
    light: {
      color: (get) => get('colorScheme', 'dark50Alpha'),
      borderColor: (get) => get('colorScheme', 'dark10Alpha'),
      backgroundColor: (get) => get('colorScheme', 'light'),
    },
    default: (get) => get('navbar', 'colors', 'light'),
  },
  padding: {
    default: '0.5rem 1rem',
  },
};

export { navbar };
