
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipArrow } from '../../src';

test('Styles matches TooltipArrow bottom', () => {
  const tree = renderer.create(<TooltipArrow bottom />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('top', '0');
});
