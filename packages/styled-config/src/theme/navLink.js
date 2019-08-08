const navLink = {
  colors: {
    light: {
      colorDisabled: (get) => get('colorScheme', 'darkLighter'),
      colorDisabledHoverFocus: (get) => get('colorScheme', 'darkLighter'),
      colorTabsActive: (get) => get('colorScheme', 'dark'),
      colorTabsActiveHoverFocus: (get) => get('colorScheme', 'darkDark'),
      colorPillsActive: (get) => get('colorScheme', 'white'),
      colorPillsActiveHoverFocus: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'primary'),
      colorHoverFocus: (get) => get('colorScheme', 'primaryDarker'),
      backgroundColorPillsActive: (get) => get('colorScheme', 'primary'),
      borderColorTabsActive: (get) => `${get('colorScheme', 'darkLight')} ${get('colorScheme', 'darkLight')} ${get('colorScheme', 'white')}`,
      borderColorTabsHoverFocus: (get) => `${get('colorScheme', 'darkLight')} ${get('colorScheme', 'darkLight')} ${get('colorScheme', 'darkLight')}`,
      borderColorTabsDisabled: (get) => get('colorScheme', 'transparent'),
      borderColorPillsActive: (get) => get('colorScheme', 'primary'),
      borderColor: (get) => get('colorScheme', 'transparent'),
    },
    dark: (get) => get('navLink', 'colors', 'light'),
    default: (get) => get('navLink', 'colors', 'light'),
  },
  padding: {
    default: '0.5rem',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  border: (get) => get('globals', 'border'),
};

export { navLink };
