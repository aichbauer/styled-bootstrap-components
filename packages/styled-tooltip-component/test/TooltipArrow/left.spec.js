
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipArrow } from '../../src';

test('Styles matches TooltipArrow left', () => {
  const tree = renderer.create(<TooltipArrow left />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('right', '0');
  expect(tree).toHaveStyleRule('width', '0.4rem');
});
