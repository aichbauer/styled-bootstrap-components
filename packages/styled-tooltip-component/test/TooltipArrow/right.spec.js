
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipArrow } from '../../src';

test('Styles matches TooltipArrow right', () => {
  const tree = renderer.create(<TooltipArrow right />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('left', '0');
  expect(tree).toHaveStyleRule('width', '0.4rem');
});
