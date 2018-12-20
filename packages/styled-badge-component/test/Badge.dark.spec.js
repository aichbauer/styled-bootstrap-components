import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches dark', () => {
  const tree = renderer.create(<Badge dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#343a40');
});

test('Styles matches dark action', () => {
  const tree = renderer.create(<Badge dark action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#343a40');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('background-color', '#1d2124', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#1d2124', {
    modifier: '&:focus',
  });
});
