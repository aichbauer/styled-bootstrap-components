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
  borderRadius: (get) => get('globals', 'borderRadius'),
};

export { breadcrumb };
