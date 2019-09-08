const alert = {
  colors: {
    primary: {
      text: (get) => get('colorScheme', 'primaryDarkest'),
      background: (get) => get('colorScheme', 'primaryLight'),
      border: (get) => get('colorScheme', 'primaryLighter'),
      borderTop: (get) => get('colorScheme', 'primaryLighter'),
      hover: (get) => get('colorScheme', 'primaryDarkest'),
    },
    secondary: {
      text: (get) => get('colorScheme', 'secondaryDarkest'),
      background: (get) => get('colorScheme', 'secondaryLight'),
      border: (get) => get('colorScheme', 'secondaryLighter'),
      borderTop: (get) => get('colorScheme', 'secondaryLighter'),
      hover: (get) => get('colorScheme', 'secondaryDarkest'),
    },
    success: {
      text: (get) => get('colorScheme', 'successDarkest'),
      background: (get) => get('colorScheme', 'successLight'),
      border: (get) => get('colorScheme', 'successLighter'),
      borderTop: (get) => get('colorScheme', 'successLighter'),
      hover: (get) => get('colorScheme', 'successDarkest'),
    },
    danger: {
      text: (get) => get('colorScheme', 'dangerDarkest'),
      background: (get) => get('colorScheme', 'dangerLight'),
      border: (get) => get('colorScheme', 'dangerLighter'),
      borderTop: (get) => get('colorScheme', 'dangerLighter'),
      hover: (get) => get('colorScheme', 'dangerDarkest'),
    },
    warning: {
      text: (get) => get('colorScheme', 'warningDarkest'),
      background: (get) => get('colorScheme', 'warningLight'),
      border: (get) => get('colorScheme', 'warningLighter'),
      borderTop: (get) => get('colorScheme', 'warningLighter'),
      hover: (get) => get('colorScheme', 'warningDarkest'),
    },
    info: {
      text: (get) => get('colorScheme', 'infoDarkest'),
      background: (get) => get('colorScheme', 'infoLight'),
      border: (get) => get('colorScheme', 'infoLighter'),
      borderTop: (get) => get('colorScheme', 'infoLighter'),
      hover: (get) => get('colorScheme', 'infoDarkest'),
    },
    light: {
      text: (get) => get('colorScheme', 'lightDarkest'),
      background: (get) => get('colorScheme', 'lightLight'),
      border: (get) => get('colorScheme', 'lightDark'),
      borderTop: (get) => get('colorScheme', 'lightLighter'),
      hover: (get) => get('colorScheme', 'darkDarkest'),
    },
    dark: {
      text: (get) => get('colorScheme', 'darkDarkest'),
      background: (get) => get('colorScheme', 'darkLight'),
      border: (get) => get('colorScheme', 'darkLighter'),
      borderTop: (get) => get('colorScheme', 'darkLighter'),
      hover: (get) => get('colorScheme', 'darkDarkest'),
    },
    default: (get) => get('alert', 'colors', 'secondary'),
  },
  margin: {
    bottom: '1rem',
  },
  padding: {
    default: '0.75rem 1.25rem',
    dismissibleRight: '4rem',
  },
  border: {
    default: '1px solid transparent',
  },
  borderRadius: (get) => get('globals', 'borderRadius'),
  fontWeight: {
    default: '700',
  },
};

export { alert };
