const popoverArrow = {
  colors: {
    default: {
      borderColor: (get) => get('colorScheme', 'dark25Alpha'),
      borderColorWhite: (get) => get('colorScheme', 'white'),
    },
  },
};

export { popoverArrow };
