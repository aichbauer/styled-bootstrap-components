import { smallModalWidth } from '../../../src/components/Modal';

test('smallModalWidth sm', () => {
  expect(smallModalWidth({
    sm: true,
  })).toBe('300px');
});
