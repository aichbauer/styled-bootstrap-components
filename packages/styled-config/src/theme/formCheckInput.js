const formCheckInput = {
  colors: {
    default: {
      colorDisabled: (get) => get('colorScheme', 'darkLighter'),
      colorDisabledLabel: (get) => get('colorScheme', 'darkLighter'),
    },
  },
  margin: {
    top: '0.3rem',
    left: '-1.25rem',
  },
};

export { formCheckInput };
