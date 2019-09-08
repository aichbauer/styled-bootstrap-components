const navbarLink = {
  colors: {
    dark: {
      colorDisabled: (get) => get('colorScheme', 'white25Alpha'),
      colorDisabledHoverFocus: (get) => get('colorScheme', 'white25Alpha'),
      colorActive: (get) => get('colorScheme', 'white90Alpha'),
      colorActiveHoverFocus: (get) => get('colorScheme', 'white90Alpha'),
      color: (get) => get('colorScheme', 'white50Alpha'),
      colorHoverFocus: (get) => get('colorScheme', 'white75Alpha'),
    },
    light: {
      colorDisabled: (get) => get('colorScheme', 'dark25Alpha'),
      colorDisabledHoverFocus: (get) => get('colorScheme', 'dark25Alpha'),
      colorActive: (get) => get('colorScheme', 'dark90Alpha'),
      colorActiveHoverFocus: (get) => get('colorScheme', 'dark90Alpha'),
      color: (get) => get('colorScheme', 'dark50Alpha'),
      colorHoverFocus: (get) => get('colorScheme', 'dark75Alpha'),
    },
    default: (get) => get('navbarLink', 'colors', 'light'),
  },
  padding: {
    brandTop: '0.3125rem',
    brandBottom: '0.3125rem',
  },
  fontSize: (get) => get('globals', 'fontSize'),
};

export { navbarLink };
