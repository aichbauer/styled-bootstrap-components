import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink disabled', () => {
  const tree = renderer.create(<NavLink disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '&:focus',
  });
});
