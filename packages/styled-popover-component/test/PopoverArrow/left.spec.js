
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverArrow } from '../../src';

test('Styles matches PopoverArrow left', () => {
  const tree = renderer.create(<PopoverArrow left />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('right', 'calc((0.5rem + 1px) * -1)');
  expect(tree).toHaveStyleRule('width', '0.5rem');
  expect(tree).toHaveStyleRule('margin', '0.3rem 0');
});

