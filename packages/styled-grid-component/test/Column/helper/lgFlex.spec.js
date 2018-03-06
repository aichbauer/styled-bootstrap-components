import { lgFlex } from '../../../src/components/Column';

// TODO: how to check @media queries
test('large flex', () => {
  expect(lgFlex({
    xl: 1,
  })).toBe('0 0 100%');
  expect(lgFlex({
    sm: 1,
  })).toBe('0 0 8.333333%');
  expect(lgFlex({
    sm: 2,
  })).toBe('0 0 16.666667%');
  expect(lgFlex({
    sm: 3,
  })).toBe('0 0 25%');
  expect(lgFlex({
    sm: 4,
  })).toBe('0 0 33.333333%');
  expect(lgFlex({
    sm: 5,
  })).toBe('0 0 41.666667%');
  expect(lgFlex({
    sm: 6,
  })).toBe('0 0 50%');
  expect(lgFlex({
    sm: 7,
  })).toBe('0 0 58.333333%');
  expect(lgFlex({
    sm: 8,
  })).toBe('0 0 66.666667%');
  expect(lgFlex({
    sm: 9,
  })).toBe('0 0 75%');
  expect(lgFlex({
    sm: 10,
  })).toBe('0 0 83.333333%');
  expect(lgFlex({
    sm: 11,
  })).toBe('0 0 91.666667%');
  expect(lgFlex({
    sm: 12,
  })).toBe('0 0 100%');
  expect(lgFlex({
    md: 1,
  })).toBe('0 0 8.333333%');
  expect(lgFlex({
    md: 2,
  })).toBe('0 0 16.666667%');
  expect(lgFlex({
    md: 3,
  })).toBe('0 0 25%');
  expect(lgFlex({
    md: 4,
  })).toBe('0 0 33.333333%');
  expect(lgFlex({
    md: 5,
  })).toBe('0 0 41.666667%');
  expect(lgFlex({
    md: 6,
  })).toBe('0 0 50%');
  expect(lgFlex({
    md: 7,
  })).toBe('0 0 58.333333%');
  expect(lgFlex({
    md: 8,
  })).toBe('0 0 66.666667%');
  expect(lgFlex({
    md: 9,
  })).toBe('0 0 75%');
  expect(lgFlex({
    md: 10,
  })).toBe('0 0 83.333333%');
  expect(lgFlex({
    md: 11,
  })).toBe('0 0 91.666667%');
  expect(lgFlex({
    md: 12,
  })).toBe('0 0 100%');
  expect(lgFlex({
    lg: 1,
  })).toBe('0 0 8.333333%');
  expect(lgFlex({
    lg: 2,
  })).toBe('0 0 16.666667%');
  expect(lgFlex({
    lg: 3,
  })).toBe('0 0 25%');
  expect(lgFlex({
    lg: 4,
  })).toBe('0 0 33.333333%');
  expect(lgFlex({
    lg: 5,
  })).toBe('0 0 41.666667%');
  expect(lgFlex({
    lg: 6,
  })).toBe('0 0 50%');
  expect(lgFlex({
    lg: 7,
  })).toBe('0 0 58.333333%');
  expect(lgFlex({
    lg: 8,
  })).toBe('0 0 66.666667%');
  expect(lgFlex({
    lg: 9,
  })).toBe('0 0 75%');
  expect(lgFlex({
    lg: 10,
  })).toBe('0 0 83.333333%');
  expect(lgFlex({
    lg: 11,
  })).toBe('0 0 91.666667%');
  expect(lgFlex({
    lg: 12,
  })).toBe('0 0 100%');
});
