const formControlPlainText = {
  colors: {
    default: {
      backgroundColor: (get) => get('colorScheme', 'transparent'),
      borderColor: (get) => get('colorScheme', 'transparent'),
    },
  },
  padding: {
    top: '0.375rem',
    bottom: '0.375rem',
    smRight: '0',
    smLeft: '0',
  },
  margin: {
    bottom: '0',
  },
};

export { formControlPlainText };
