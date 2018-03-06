import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem primary action', () => {
  const tree = renderer.create(<ListGroupItem primary action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#004085');
  expect(tree).toHaveStyleRule('background-color', '#b8daff');
  expect(tree).toHaveStyleRule('color', '#004085', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#004085', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#9fcdff', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem primary', () => {
  const tree = renderer.create(<ListGroupItem primary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#004085');
  expect(tree).toHaveStyleRule('background-color', '#b8daff');
});

test('Styles matches ListGroupItem primary active', () => {
  const tree = renderer.create(<ListGroupItem primary active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#004085');
  expect(tree).toHaveStyleRule('border-color', '#004085');
});
