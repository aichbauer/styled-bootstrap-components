import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink noRadius', () => {
  const tree = renderer.create(<NavLink to="#" noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
