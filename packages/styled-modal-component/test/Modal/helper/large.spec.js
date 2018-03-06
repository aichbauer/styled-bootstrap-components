import { largeModalWidth } from '../../../src/components/Modal';

test('largeModalWidth sm', () => {
  expect(largeModalWidth({
    lg: true,
  })).toBe('800px');
});
