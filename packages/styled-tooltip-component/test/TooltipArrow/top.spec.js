
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipArrow } from '../../src';

test('Styles matches TooltipArrow top', () => {
  const tree = renderer.create(<TooltipArrow top />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('bottom', '0');
  expect(tree).toHaveStyleRule('width', '100%');
});
