import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches success', () => {
  const tree = renderer.create(<Badge success />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#28a745');
});

test('Styles matches success action', () => {
  const tree = renderer.create(<Badge success action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#28a745');
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
  expect(tree).toHaveStyleRule('background-color', '#1e7e34', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#1e7e34', {
    modifier: '&:focus',
  });
});
