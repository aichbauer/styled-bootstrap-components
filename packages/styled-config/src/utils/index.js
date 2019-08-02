import { theme as defaultTheme } from '../theme';

// ---------------------------------------------------------------------------

export const getProperty = (obj, level, ...rest) => {
  if (obj === undefined) return undefined;
  if (rest.length === 0) return obj[level];
  return getProperty(obj[level], ...rest);
};

export const getConfigProperty = (theme, ...propertyPath) => (
  getProperty(theme, ...propertyPath)
  || getProperty(defaultTheme, ...propertyPath)
);

// Helper for creating basic getter function for config's properies
export const makeGetter = (property) => (
  (props, accessor) => getConfigProperty(props.theme, accessor, property)
);

// ---------------------------------------------------------------------------

export const boxShadow = makeGetter('boxShadow');
export const margin = makeGetter('margin');
export const padding = makeGetter('padding');
export const border = makeGetter('border');
export const borderRadius = makeGetter('borderRadius');
export const fontWeight = makeGetter('fontWeight');
export const fontSize = makeGetter('fontSize');
export const fontFamily = makeGetter('fontFamily');
export const width = makeGetter('width');
export const height = makeGetter('height');

export const screenSize = (props) => {
  if (props.sm || props.expandSm) {
    return getConfigProperty(props.theme, 'screenSize', 'sm');
  } else if (props.md || props.expandMd) {
    return getConfigProperty(props.theme, 'screenSize', 'md');
  } else if (props.lg || props.expandLg) {
    return getConfigProperty(props.theme, 'screenSize', 'lg');
  } else if (props.xl || props.expandXl) {
    return getConfigProperty(props.theme, 'screenSize', 'xl');
  }

  return '';
};

export const colors = (props, accessor) => {
  const theme = props.theme || defaultTheme;
  const availableColors = Object.keys(theme.colorScheme);

  for (let i = 0; i < availableColors.length; i += 1) {
    const color = availableColors[i];

    if (props[color]) {
      return getConfigProperty(props.theme, accessor, 'colors', color);
    }
  }

  // Default
  return getConfigProperty(props.theme, accessor, 'colors', 'secondary');
};
