const modalContent = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'white'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  border: (get) => get('globals', 'border'),
};

export { modalContent };
