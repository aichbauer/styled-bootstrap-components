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
  const cd = colors({ theme }, 'button');
  const cp = colors({ theme, primary: true }, 'button');

  expect(cd).toEqual(theme.button.colors.default);
  expect(cp).toEqual(theme.button.colors.primary);
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
  const myScreenSize = screenSize({ sm: true });
  expect(myScreenSize).toEqual(theme.screenSize.sm);
});

test('test if width extract width of theme', () => {
  const w = width({ theme }, 'button');
  expect(w).toEqual(theme.button.width);
});

