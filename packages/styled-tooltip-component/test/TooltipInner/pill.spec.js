
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipInner } from '../../src';

test('Styles matches TooltipInner pill', () => {
  const tree = renderer.create(<TooltipInner pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
