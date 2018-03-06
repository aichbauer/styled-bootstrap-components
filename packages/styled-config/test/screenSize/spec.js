import { screenSize } from '../../src';

test('screenSize sm', () => {
  expect(screenSize.sm).toBe('576px');
});

test('screenSize md', () => {
  expect(screenSize.md).toBe('768px');
});

test('screenSize lg', () => {
  expect(screenSize.lg).toBe('992px');
});

test('screenSize xl', () => {
  expect(screenSize.xl).toBe('1200px');
});
