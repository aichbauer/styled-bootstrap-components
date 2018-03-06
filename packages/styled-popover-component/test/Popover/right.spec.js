import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover right', () => {
  const tree = renderer.create(<Popover right />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-left', '0.5rem');
});
