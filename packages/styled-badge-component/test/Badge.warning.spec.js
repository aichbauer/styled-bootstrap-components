import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches warning', () => {
  const tree = renderer.create(<Badge warning />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#ffc107');
});

test('Styles matches warning action', () => {
  const tree = renderer.create(<Badge warning action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#212529');
  expect(tree).toHaveStyleRule('background-color', '#ffc107');
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
  expect(tree).toHaveStyleRule('background-color', '#d39e00', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#d39e00', {
    modifier: '&:focus',
  });
});
