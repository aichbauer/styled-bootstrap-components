const tr = {
  colors: {
    primary: {
      backgroundColor: (get) => get('colorScheme', 'primaryLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'primary'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    secondary: {
      backgroundColor: (get) => get('colorScheme', 'secondaryLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'secondary'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    success: {
      backgroundColor: (get) => get('colorScheme', 'successLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'success'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    info: {
      backgroundColor: (get) => get('colorScheme', 'infoLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'info'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    warning: {
      backgroundColor: (get) => get('colorScheme', 'warningLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'warning'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    danger: {
      backgroundColor: (get) => get('colorScheme', 'dangerLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'danger'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    light: {
      backgroundColor: (get) => get('colorScheme', 'lightLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'lightDark'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    dark: {
      backgroundColor: (get) => get('colorScheme', 'darkLighter'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'dark'),
      activeBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: (get) => get('colorScheme', 'dark10Alpha'),
    },
    default: (get) => get('tr', 'colors', 'secondary'),
  },
};

export { tr };
