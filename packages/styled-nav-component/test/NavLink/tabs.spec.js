import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink tabs active', () => {
  const tree = renderer.create(<NavLink tabs active />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavLink tabs disabled', () => {
  const tree = renderer.create(<NavLink tabs disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavLink tabs', () => {
  const tree = renderer.create(<NavLink tabs />).toJSON();
  expect(tree).toMatchSnapshot();
});

