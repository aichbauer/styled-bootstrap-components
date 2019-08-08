const dropdownItem = {
  colors: {
    default: {
      color: (get) => get('colorScheme', 'darker'),
      colorHoverFocus: (get) => get('colorScheme', 'darkerDarker'),
      colorActive: (get) => get('colorScheme', 'darkerDark'),
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorActive: (get) => get('colorScheme', 'primary'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'light'),
    },
  },
  fontWeight: {
    default: '400',
  },
  padding: {
    default: '0.25rem 1.5rem',
  },
};

export { dropdownItem };
