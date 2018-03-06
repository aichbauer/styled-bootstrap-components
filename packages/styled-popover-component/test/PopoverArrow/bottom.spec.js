
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverArrow } from '../../src';

test('Styles matches PopoverArrow bottom', () => {
  const tree = renderer.create(<PopoverArrow bottom />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('top', 'calc((0.5rem + 1px) * -1)');
});

