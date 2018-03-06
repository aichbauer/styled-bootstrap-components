import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Container } from '../src';

// TODO: how to test @media queries
test('Styles matches Container', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('margin-right', 'auto');
  expect(tree).toHaveStyleRule('margin-left', 'auto');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});

// TODO: how to test @media queries
test('Styles matches Container', () => {
  const tree = renderer.create(<Container fluid />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('margin-right', 'auto');
  expect(tree).toHaveStyleRule('margin-left', 'auto');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
