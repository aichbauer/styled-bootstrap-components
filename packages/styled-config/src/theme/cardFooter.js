const cardFooter = {
  colors: {
    default: {
      background: (get) => get('colorScheme', 'weakBackground'),
      borderTop: (get) => get('colorScheme', 'weakBorder'),
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: (get) => get('globals', 'borderRadius', 'noRadius'),
    default: '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)',
  },
  border: (get) => get('globals', 'border'),
};

export { cardFooter };
