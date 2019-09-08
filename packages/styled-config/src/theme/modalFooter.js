const modalFooter = {
  colors: {
    default: {
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  padding: {
    default: '1rem',
  },
  border: (get) => get('globals', 'border'),
};

export { modalFooter };
