import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavLink } from '../../src';

test('Styles matches NavLink tabs active', () => {
  const tree = renderer.create(<NavLink tabs active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#495057');
  expect(tree).toHaveStyleRule('border-color', '#e9ecef #e9ecef #fff');
  expect(tree).toHaveStyleRule('color', '#495057', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#495057', {
    modifier: '&:focus',
  });
});

test('Styles matches NavLink tabs disabled', () => {
  const tree = renderer.create(<NavLink tabs disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-color', 'transparent');
});

test('Styles matches NavLink tabs', () => {
  const tree = renderer.create(<NavLink tabs />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-color', '#e9ecef #e9ecef #dee2e6', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border-color', '#e9ecef #e9ecef #dee2e6', {
    modifier: '&:focus',
  });
});

