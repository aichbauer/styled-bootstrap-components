const nav = {
  colors: {
    default: {
      borderColorTabs: (get) => get('colorScheme', 'lightDark'),
    },
  },
  padding: {
    collapseNotHiddenARight: '0.5rem',
    collapseNotHiddenALeft: '0.5rem',
    left: '0',
  },
  margin: {
    bottom: '0',
  },
  border: (get) => get('globals', 'border'),
};

export { nav };
