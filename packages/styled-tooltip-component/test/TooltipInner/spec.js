
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipInner } from '../../src';

test('Styles matches TooltipInner', () => {
  const tree = renderer.create(<TooltipInner />).toJSON();
  expect(tree).toMatchSnapshot();
});
