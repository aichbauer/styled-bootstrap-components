import { theme } from '../../src';
import { themeFixture } from '../fixtures';

import fs from 'fs';

test('test if fixture matches theme', () => {
  fs.writeFileSync('./test.json', JSON.stringify(theme));
  expect(theme).toEqual(themeFixture);
});
