import {
  theme,
  getBorder,
  borderRadius,
  getBoxShadow,
  getColor,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  getMargin,
  getPadding,
  width,
  getBreakpointSize,
  getConcreteBreakpointSize,
} from '../../src';

test('test if getBorder extracts border of theme', () => {
  const b = getBorder({ theme }, 'button');

  expect(b).toEqual(theme.button.border);
});

test('test if borderRadius extracts borderRadius of theme', () => {
  const br = borderRadius({ theme }, 'button');

  expect(br).toEqual(theme.button.borderRadius);
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

  expect(cDefault).toEqual(theme.button.colors.default);
  expect(cPrimary).toEqual(theme.button.colors.primary);
  expect(cSecondary).toEqual(theme.button.colors.secondary);
  expect(cSuccess).toEqual(theme.button.colors.success);
  expect(cDanger).toEqual(theme.button.colors.danger);
  expect(cWarning).toEqual(theme.button.colors.warning);
  expect(cInfo).toEqual(theme.button.colors.info);
  expect(cLight).toEqual(theme.button.colors.light);
  expect(cDark).toEqual(theme.button.colors.dark);
});

test('test if fontFamily extracts fontFamily of theme', () => {
  const ff = fontFamily({ theme }, 'tooltip');

  expect(ff).toEqual(theme.tooltip.fontFamily);
});

test('test if fontSize extract fontSize of theme', () => {
  const fs = fontSize({ theme }, 'button');
  expect(fs).toEqual(theme.button.fontSize);
});

test('test if fontWeight extract fontWeight of theme', () => {
  const fw = fontWeight({ theme }, 'button');
  expect(fw).toEqual(theme.button.fontWeight);
});

test('test if height extract height of theme', () => {
  const h = height({ theme }, 'button');
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

test('test if width extract width of theme', () => {
  const w = width({ theme }, 'button');
  expect(w).toEqual(theme.button.width);
});

