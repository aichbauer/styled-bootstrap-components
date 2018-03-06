import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches light', () => {
  const tree = renderer.create(<Badge light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa');
});

test('Styles matches light action', () => {
  const tree = renderer.create(<Badge light action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('color', '#212529', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#dae0e5', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#dae0e5', {
    modifier: '&:focus',
  });
});
