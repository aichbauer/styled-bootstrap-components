import { smFlex } from '../../../src/components/Column';

// TODO: how to check @media queries
test('small flex', () => {
  expect(smFlex({
    md: 1,
  })).toBe('0 0 100%');
  expect(smFlex({
    lg: 1,
  })).toBe('0 0 100%');
  expect(smFlex({
    xl: 1,
  })).toBe('0 0 100%');
  expect(smFlex({
    sm: 1,
  })).toBe('0 0 8.333333%');
  expect(smFlex({
    sm: 2,
  })).toBe('0 0 16.666667%');
  expect(smFlex({
    sm: 3,
  })).toBe('0 0 25%');
  expect(smFlex({
    sm: 4,
  })).toBe('0 0 33.333333%');
  expect(smFlex({
    sm: 5,
  })).toBe('0 0 41.666667%');
  expect(smFlex({
    sm: 6,
  })).toBe('0 0 50%');
  expect(smFlex({
    sm: 7,
  })).toBe('0 0 58.333333%');
  expect(smFlex({
    sm: 8,
  })).toBe('0 0 66.666667%');
  expect(smFlex({
    sm: 9,
  })).toBe('0 0 75%');
  expect(smFlex({
    sm: 10,
  })).toBe('0 0 83.333333%');
  expect(smFlex({
    sm: 11,
  })).toBe('0 0 91.666667%');
  expect(smFlex({
    sm: 12,
  })).toBe('0 0 100%');
});
