const popoverHeader = {
  colors: {
    default: {
      backgrondColor: (get) => get('colorScheme', 'light'),
      borderBottomColor: (get) => get('colorScheme', 'lightDarker'),
    },
  },
  padding: {
    default: '0.5rem 0.75rem',
  },
  margin: {
    bottom: '0',
    top: '0',
    beforeLeft: '-0.5rem',
  },
  border: (get) => get('globals', 'border'),
  fontSize: (get) => get('globals', 'fontSize'),
};

export { popoverHeader };
