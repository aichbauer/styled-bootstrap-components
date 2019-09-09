const badge = {
  colors: {
    primary: {
      backgroundColor: (get) => get('colorScheme', 'primary'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'primaryDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    secondary: {
      backgroundColor: (get) => get('colorScheme', 'secondary'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'secondaryDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    success: {
      backgroundColor: (get) => get('colorScheme', 'success'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'successDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    danger: {
      backgroundColor: (get) => get('colorScheme', 'danger'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'dangerDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    warning: {
      backgroundColor: (get) => get('colorScheme', 'warning'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'warningDarker'),
      color: (get) => get('colorScheme', 'darker'),
      linkColor: (get) => get('colorScheme', 'darker'),
    },
    info: {
      backgroundColor: (get) => get('colorScheme', 'info'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'infoDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    light: {
      backgroundColor: (get) => get('colorScheme', 'light'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'lightDarker'),
      color: (get) => get('colorScheme', 'darker'),
      linkColor: (get) => get('colorScheme', 'darker'),
    },
    dark: {
      backgroundColor: (get) => get('colorScheme', 'dark'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'darkDarker'),
      color: (get) => get('colorScheme', 'white'),
      linkColor: (get) => get('colorScheme', 'white'),
    },
    default: (get) => get('badge', 'colors', 'secondary'),
  },
  padding: {
    pill: '0.25rem 0.6rem',
    default: '0.25rem 0.4rem',
  },
  fontWeight: {
    default: '700',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
};

export { badge };
