import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover bottom', () => {
  const tree = renderer.create(<Popover bottom />).toJSON();
  expect(tree).toMatchSnapshot();

  const popover = tree.children[0];
  expect(popover).toHaveStyleRule('margin-top', '0.5rem');
});
