import { theme } from '../../src';
import { themeFixture } from '../fixtures';

test('test if fixture matches theme', () => {
  expect(theme).toEqual(themeFixture);
});
