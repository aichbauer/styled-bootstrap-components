import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches info', () => {
  const tree = renderer.create(<Badge info />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#17a2b8');
});

test('Styles matches info action', () => {
  const tree = renderer.create(<Badge info action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#17a2b8');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('background-color', '#117a8b', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#117a8b', {
    modifier: '&:focus',
  });
});
