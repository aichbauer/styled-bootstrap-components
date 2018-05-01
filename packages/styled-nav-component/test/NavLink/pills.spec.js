import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink pills active', () => {
  const tree = renderer.create(<NavLink to="#" pills active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modfier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modfier: '&:focus',
  });
});
