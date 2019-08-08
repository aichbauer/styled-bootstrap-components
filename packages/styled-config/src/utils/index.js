import { theme as defaultTheme } from '../theme';

// ---------------------------------------------------------------------------

export const getConfigProperty = (theme, ...propertyPath) => {
  // Function for getting values from themes
  const getterFunction = (...path) => getConfigProperty(theme, ...path);

  // Function for gettings values from objects while 'dereferencing' all
  // functional values
  const receiveValueSafe = (initialValue, ...path) => {
    let value = initialValue;

    for (let i = 0; value !== undefined && i < path.length; i += 1) {
      let tempValue = value[path[i]];

      while (typeof tempValue === 'function') {
        tempValue = tempValue(getterFunction);
      }

      value = tempValue;
    }

    return value;
  };

  const value = receiveValueSafe(theme, ...propertyPath);

  // Use default theme if property is not found in current theme
  if (value === undefined) {
    return receiveValueSafe(defaultTheme, ...propertyPath);
  }

  return value;
};

// Helper for creating basic getter function for acessor's config properies
export const makeGetter = (property) => (
  (props, accessor, ...path) =>
    getConfigProperty(props.theme, accessor, property, ...path)
);

// ---------------------------------------------------------------------------

export const getBoxShadow = makeGetter('boxShadow');
export const getMargin = makeGetter('margin');
export const getPadding = makeGetter('padding');
export const getBorder = makeGetter('border');
export const getBorderRadius = makeGetter('borderRadius');
export const getFontWeight = makeGetter('fontWeight');
export const getFontSize = makeGetter('fontSize');
export const getFontFamily = makeGetter('fontFamily');
export const getWidth = makeGetter('width');
export const getHeight = makeGetter('height');

export const getConcreteBreakpointSize = (props, size) => getConfigProperty(props.theme, 'screenSize', size);

export const getBreakpointSize = (props) => {
  if (props.sm || props.expandSm) {
    return getConcreteBreakpointSize(props.theme, 'sm');
  } else if (props.md || props.expandMd) {
    return getConcreteBreakpointSize(props.theme, 'md');
  } else if (props.lg || props.expandLg) {
    return getConcreteBreakpointSize(props.theme, 'lg');
  } else if (props.xl || props.expandXl) {
    return getConcreteBreakpointSize(props.theme, 'xl');
  }

  return '';
};

export const getColor = (props, accessor, ...path) => {
  const availableColors = Object.keys(defaultTheme.colorScheme);

  for (let i = 0; i < availableColors.length; i += 1) {
    const color = availableColors[i];

    if (props[color]) {
      return getConfigProperty(props.theme, accessor, 'colors', color, ...path);
    }
  }

  // Default
  return getConfigProperty(props.theme, accessor, 'colors', 'default', ...path);
};
