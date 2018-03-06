import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem secondary action', () => {
  const tree = renderer.create(<ListGroupItem secondary action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#383d41');
  expect(tree).toHaveStyleRule('background-color', '#d6d8db');
  expect(tree).toHaveStyleRule('color', '#383d41', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#383d41', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem secondary', () => {
  const tree = renderer.create(<ListGroupItem secondary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#383d41');
  expect(tree).toHaveStyleRule('background-color', '#d6d8db');
});

test('Styles matches ListGroupItem secondary active', () => {
  const tree = renderer.create(<ListGroupItem secondary active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#383d41');
  expect(tree).toHaveStyleRule('border-color', '#383d41');
});
