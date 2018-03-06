import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownItem } from '../../src';

test('Styles matches DropdownItem', () => {
  const tree = renderer.create(<DropdownItem />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.25rem 1.5rem');
  expect(tree).toHaveStyleRule('clear', 'both');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('text-align', 'inherit');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', '0');
  expect(tree).toHaveStyleRule('color', '#16181b', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', '#16181b', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa', {
    modifier: '&:focus',
  });
});
