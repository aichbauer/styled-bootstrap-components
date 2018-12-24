import {
  theme,
  border,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  screenSize,
  width,
} from '../../src';

test('test if border extracts border of theme', () => {
  const b = border({ theme }, 'button');

  expect(b).toEqual(theme.button.border);
});

test('test if borderRadius extracts borderRadius of theme', () => {
  const br = borderRadius({ theme }, 'button');

  expect(br).toEqual(theme.button.borderRadius);
});

test('test if boxShadow extracts boxShadow of theme', () => {
  const bs = boxShadow({ theme }, 'button');

  expect(bs).toEqual(theme.button.boxShadow);
});

test('test if colors extracts colors of theme', () => {
  const cDefault = colors({ theme }, 'button');
  const cPrimary = colors({ theme, primary: true }, 'button');
  const cSecondary = colors({ theme, secondary: true }, 'button');
  const cSuccess = colors({ theme, success: true }, 'button');
  const cDanger = colors({ theme, danger: true }, 'button');
  const cWarning = colors({ theme, warning: true }, 'button');
  const cInfo = colors({ theme, info: true }, 'button');
  const cLight = colors({ theme, light: true }, 'button');
  const cDark = colors({ theme, dark: true }, 'button');

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

test('test if margin extract margin of theme', () => {
  const m = margin({ theme }, 'button');
  expect(m).toEqual(theme.button.margin);
});

test('test if padding extract padding of theme', () => {
  const p = padding({ theme }, 'button');
  expect(p).toEqual(theme.button.padding);
});

test('test if screenSize extract screenSize of theme', () => {
  const myScreenSizeSm = screenSize({ theme, sm: true });
  expect(myScreenSizeSm).toEqual(theme.screenSize.sm);

  const myScreenSizeMd = screenSize({ theme, md: true });
  expect(myScreenSizeMd).toEqual(theme.screenSize.md);

  const myScreenSizeLg = screenSize({ theme, lg: true });
  expect(myScreenSizeLg).toEqual(theme.screenSize.lg);

  const myScreenSizeXl = screenSize({ theme, xl: true });
  expect(myScreenSizeXl).toEqual(theme.screenSize.xl);

  const myScreenSizeDefault = screenSize({ theme });
  expect(myScreenSizeDefault).toEqual('');
});

test('test if width extract width of theme', () => {
  const w = width({ theme }, 'button');
  expect(w).toEqual(theme.button.width);
});

