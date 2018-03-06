import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches danger', () => {
  const tree = renderer.create(<Badge danger />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#dc3545');
});

test('Styles matches danger action', () => {
  const tree = renderer.create(<Badge danger action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#dc3545');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#bd2130', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#bd2130', {
    modifier: '&:focus',
  });
});
