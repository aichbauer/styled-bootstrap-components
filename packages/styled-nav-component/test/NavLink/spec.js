import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink', () => {
  const tree = renderer.create(<NavLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
