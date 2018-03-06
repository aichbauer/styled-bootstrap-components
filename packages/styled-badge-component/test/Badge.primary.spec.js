import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches primary', () => {
  const tree = renderer.create(<Badge primary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
});

test('Styles matches primary action', () => {
  const tree = renderer.create(<Badge primary action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
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
  expect(tree).toHaveStyleRule('background-color', '#0062cc', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#0062cc', {
    modifier: '&:focus',
  });
});

