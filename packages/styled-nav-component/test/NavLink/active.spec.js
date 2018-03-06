import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink active', () => {
  const tree = renderer.create(<NavLink active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#495057');
  expect(tree).toHaveStyleRule('background-color', '#fff');
});
