import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem success action', () => {
  const tree = renderer.create(<ListGroupItem success action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#155724');
  expect(tree).toHaveStyleRule('background-color', '#c3e6cb');
  expect(tree).toHaveStyleRule('color', '#155724', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#155724', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem success', () => {
  const tree = renderer.create(<ListGroupItem success />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#155724');
  expect(tree).toHaveStyleRule('background-color', '#c3e6cb');
});

test('Styles matches ListGroupItem success active', () => {
  const tree = renderer.create(<ListGroupItem success active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#155724');
  expect(tree).toHaveStyleRule('border-color', '#155724');
});
