import { columnStyleForSize } from '../../../src/components/Column';

// TODO: how to check @media queries
test('columnStyleForSize returns css with flex and max-width', () => {
  const css = columnStyleForSize(1);

  expect(css[0]).toBe('\n  flex: 0 0 ');
  expect(css[2]).toBe(';\n  max-width: ');
  expect(css[4]).toBe(';\n');
});

test('columnStyleForSize returns correct numbers', () => {
  for (let i = 0; i < 12; i += 1) {
    expect(columnStyleForSize(i)[1]).toBe(`${100 * (i / 12)}%`);
    expect(columnStyleForSize(i)[3]).toBe(`${100 * (i / 12)}%`);
  }
});
