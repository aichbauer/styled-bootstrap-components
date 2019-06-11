import { columnStyleForOffset } from '../../../src/components/Column';

// TODO: how to check @media queries
test('columnStyleForSize returns css with flex and max-width', () => {
  const css = columnStyleForOffset(1);

  expect(css[0]).toBe('\n  margin-left: ');
  expect(css[2]).toBe(';\n');
});

test('columnStyleForSize returns correct numbers', () => {
  for (let i = 0; i < 12; i += 1) {
    expect(columnStyleForOffset(i)[1]).toBe(`${100 * (i / 12)}%`);
  }
});
