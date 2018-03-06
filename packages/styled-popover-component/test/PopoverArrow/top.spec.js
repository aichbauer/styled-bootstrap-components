
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverArrow } from '../../src';

test('Styles matches PopoverArrow top', () => {
  const tree = renderer.create(<PopoverArrow top />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('bottom', 'calc((0.5rem + 1px) * -1)');
});
