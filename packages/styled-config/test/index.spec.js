import {
  theme,
  getBorder,
  getBorderRadius,
  getBoxShadow,
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getHeight,
  getMargin,
  getPadding,
  getWidth,
  getConfigProperty,
  getBreakpointSize,
  getConcreteBreakpointSize,
} from '../src';

test('test if all values in configuration resolves', () => {
  const traverse = (obj) => {
    Object.keys(obj).forEach((key) => {
      const value = getConfigProperty(obj, key);

      if (typeof value === 'object') {
        traverse(value);
      }
    });
  };

  traverse(theme);
});

test('test if getBorder extracts border of theme', () => {
  const b = getBorder({ theme }, 'button');

  expect(b).toEqual(getConfigProperty(theme, 'button', 'border'));
});

test('test if getBorderRadius extracts borderRadius of theme', () => {
  const br = getBorderRadius({ theme }, 'button');

  expect(br).toEqual(getConfigProperty(theme, 'button', 'borderRadius'));
});

test('test if getBoxShadow extracts boxShadow of theme', () => {
  const bs = getBoxShadow({ theme }, 'button');
  expect(bs).toEqual(theme.button.boxShadow);
});

test('test if colors extracts colors of theme', () => {
  const cDefault = getColor({ theme }, 'button');
  const cPrimary = getColor({ theme, primary: true }, 'button');
  const cSecondary = getColor({ theme, secondary: true }, 'button');
  const cSuccess = getColor({ theme, success: true }, 'button');
  const cDanger = getColor({ theme, danger: true }, 'button');
  const cWarning = getColor({ theme, warning: true }, 'button');
  const cInfo = getColor({ theme, info: true }, 'button');
  const cLight = getColor({ theme, light: true }, 'button');
  const cDark = getColor({ theme, dark: true }, 'button');

  expect(cDefault).toEqual(getConfigProperty(theme, 'button', 'colors', 'default'));
  expect(cPrimary).toEqual(theme.button.colors.primary);
  expect(cSecondary).toEqual(theme.button.colors.secondary);
  expect(cSuccess).toEqual(theme.button.colors.success);
  expect(cDanger).toEqual(theme.button.colors.danger);
  expect(cWarning).toEqual(theme.button.colors.warning);
  expect(cInfo).toEqual(theme.button.colors.info);
  expect(cLight).toEqual(theme.button.colors.light);
  expect(cDark).toEqual(theme.button.colors.dark);
});

test('test if getFontFamily extracts fontFamily of theme', () => {
  const ff = getFontFamily({ theme }, 'tooltip');

  expect(ff).toEqual(theme.tooltip.fontFamily);
});

test('test if getFontSize extract fontSize of theme', () => {
  const fs = getFontSize({ theme }, 'button');
  expect(fs).toEqual(getConfigProperty(theme, 'button', 'fontSize'));
});

test('test if getFontWeight extract fontWeight of theme', () => {
  const fw = getFontWeight({ theme }, 'button');
  expect(fw).toEqual(theme.button.fontWeight);
});

test('test if getHeight extract height of theme', () => {
  const h = getHeight({ theme }, 'button');
  expect(h).toEqual(theme.button.height);
});

test('test if getMargin extract margin of theme', () => {
  const m = getMargin({ theme }, 'button');
  expect(m).toEqual(theme.button.margin);
});

test('test if getPadding extract padding of theme', () => {
  const p = getPadding({ theme }, 'button');
  expect(p).toEqual(theme.button.padding);
});

test('test if getBreakpointSize extract screenSize of theme', () => {
  const myScreenSizeSm = getBreakpointSize({ theme, sm: true });
  expect(myScreenSizeSm).toEqual(theme.screenSize.sm);

  const myScreenSizeMd = getBreakpointSize({ theme, md: true });
  expect(myScreenSizeMd).toEqual(theme.screenSize.md);

  const myScreenSizeLg = getBreakpointSize({ theme, lg: true });
  expect(myScreenSizeLg).toEqual(theme.screenSize.lg);

  const myScreenSizeXl = getBreakpointSize({ theme, xl: true });
  expect(myScreenSizeXl).toEqual(theme.screenSize.xl);

  const myScreenSizeDefault = getBreakpointSize({ theme });
  expect(myScreenSizeDefault).toEqual('');
});

test('test if getConcreteBreakpointSize extract same values as getBreakpointSize', () => {
  expect(getBreakpointSize({ theme, sm: true })).toEqual(getConcreteBreakpointSize({ theme }, 'sm'));
  expect(getBreakpointSize({ theme, md: true })).toEqual(getConcreteBreakpointSize({ theme }, 'md'));
  expect(getBreakpointSize({ theme, lg: true })).toEqual(getConcreteBreakpointSize({ theme }, 'lg'));
  expect(getBreakpointSize({ theme, xl: true })).toEqual(getConcreteBreakpointSize({ theme }, 'xl'));
});

test('test if getWidth extract width of theme', () => {
  const w = getWidth({ theme }, 'button');
  expect(w).toEqual(theme.button.width);
});

