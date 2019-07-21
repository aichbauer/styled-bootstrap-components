import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover left', () => {
  const tree = renderer.create(<Popover left />).toJSON();
  expect(tree).toMatchSnapshot();

  const popover = tree.children[0];
  expect(popover).toHaveStyleRule('margin-right', '0.5rem');
});
