import { mdFlex } from '../../../src/components/Column';

// TODO: how to check @media queries
test('medium flex', () => {
  expect(mdFlex({
    lg: 1,
  })).toBe('0 0 100%');
  expect(mdFlex({
    xl: 1,
  })).toBe('0 0 100%');
  expect(mdFlex({
    sm: 1,
  })).toBe('0 0 8.333333%');
  expect(mdFlex({
    sm: 2,
  })).toBe('0 0 16.666667%');
  expect(mdFlex({
    sm: 3,
  })).toBe('0 0 25%');
  expect(mdFlex({
    sm: 4,
  })).toBe('0 0 33.333333%');
  expect(mdFlex({
    sm: 5,
  })).toBe('0 0 41.666667%');
  expect(mdFlex({
    sm: 6,
  })).toBe('0 0 50%');
  expect(mdFlex({
    sm: 7,
  })).toBe('0 0 58.333333%');
  expect(mdFlex({
    sm: 8,
  })).toBe('0 0 66.666667%');
  expect(mdFlex({
    sm: 9,
  })).toBe('0 0 75%');
  expect(mdFlex({
    sm: 10,
  })).toBe('0 0 83.333333%');
  expect(mdFlex({
    sm: 11,
  })).toBe('0 0 91.666667%');
  expect(mdFlex({
    sm: 12,
  })).toBe('0 0 100%');
  expect(mdFlex({
    md: 1,
  })).toBe('0 0 8.333333%');
  expect(mdFlex({
    md: 2,
  })).toBe('0 0 16.666667%');
  expect(mdFlex({
    md: 3,
  })).toBe('0 0 25%');
  expect(mdFlex({
    md: 4,
  })).toBe('0 0 33.333333%');
  expect(mdFlex({
    md: 5,
  })).toBe('0 0 41.666667%');
  expect(mdFlex({
    md: 6,
  })).toBe('0 0 50%');
  expect(mdFlex({
    md: 7,
  })).toBe('0 0 58.333333%');
  expect(mdFlex({
    md: 8,
  })).toBe('0 0 66.666667%');
  expect(mdFlex({
    md: 9,
  })).toBe('0 0 75%');
  expect(mdFlex({
    md: 10,
  })).toBe('0 0 83.333333%');
  expect(mdFlex({
    md: 11,
  })).toBe('0 0 91.666667%');
  expect(mdFlex({
    md: 12,
  })).toBe('0 0 100%');
});
