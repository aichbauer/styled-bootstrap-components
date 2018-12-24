import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { BootstrapBaseCss } from '../src';

test('test if e', () => {
  const css = renderer.create(BootstrapBaseCss.globalStyle.rules).toJSON();
  expect(css).toMatchSnapshot();
});
