
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tooltip } from '../../src';

test('Styles matches Tooltip right', () => {
  const tree = renderer.create(<Tooltip right />).toJSON();
  expect(tree).toMatchSnapshot();

  const tooltip = tree.children[0];
  expect(tooltip).toHaveStyleRule('padding', '0 0.4rem');
});
