import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink', () => {
  const tree = renderer.create(<NavLink />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('padding', '0.5rem');
  expect(tree).toHaveStyleRule('border', '1px solid transparent');
  expect(tree).toHaveStyleRule('border-top-left-radius', '0.25rem');
  expect(tree).toHaveStyleRule('border-top-right-radius', '0.25rem');
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#0056b3', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('color', '#0056b3', {
    modifier: '&:focus',
  });
});
