import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover top', () => {
  const tree = renderer.create(<Popover top />).toJSON();
  expect(tree).toMatchSnapshot();

  const popover = tree.children[0];
  expect(popover).toHaveStyleRule('margin-bottom', '0.5rem');
});
