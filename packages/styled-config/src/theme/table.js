const table = {
  colors: {
    light: {
      borderedBorderColor: (get) => get('colorScheme', 'lightDarker'),
      stripedBackgroundColor: (get) => get('colorScheme', 'dark10Alpha'),
      backgroundColorHoverFocus: (get) => get('colorScheme', 'dark25Alpha'),
      darkColor: (get) => get('colorScheme', 'white'),
      darkBackgroundColor: (get) => get('colorScheme', 'darker'),
      darkBorderColor: (get) => get('colorScheme', 'darkerDarker'),
      theadDarkColor: (get) => get('colorScheme', 'white'),
      theadDarkBackgroundColor: (get) => get('colorScheme', 'darker'),
      theadDarkBorderColor: (get) => get('colorScheme', 'darkerDarker'),
      stripedDarkBackgroundColor: (get) => get('colorScheme', 'white10Alpha'),
      darkBackgroundColorHoverFocus: (get) => get('colorScheme', 'white10Alpha'),
      theadLightColor: (get) => get('colorScheme', 'dark'),
      theadLightBackgroundColor: (get) => get('colorScheme', 'darkLight'),
      theadLightBorderColor: (get) => get('colorScheme', 'darkLight'),
      borderColor: (get) => get('colorScheme', 'darkLight'),
      backgroundColor: (get) => get('colorScheme', 'white'),
    },
    dark: (get) => get('table', 'colors', 'light'),
    default: (get) => get('table', 'colors', 'light'),
    padding: {
      sm: '0.3rem',
    },
  },
  border: (get) => get('globals', 'border'),
};

export { table };
