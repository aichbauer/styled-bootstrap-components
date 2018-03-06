import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem info action', () => {
  const tree = renderer.create(<ListGroupItem info action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#0c5460');
  expect(tree).toHaveStyleRule('background-color', '#bee5eb');
  expect(tree).toHaveStyleRule('color', '#0c5460', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#0c5460', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#abdde5', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem info', () => {
  const tree = renderer.create(<ListGroupItem info />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#0c5460');
  expect(tree).toHaveStyleRule('background-color', '#bee5eb');
});

test('Styles matches ListGroupItem info active', () => {
  const tree = renderer.create(<ListGroupItem info active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#0c5460');
  expect(tree).toHaveStyleRule('border-color', '#0c5460');
});

