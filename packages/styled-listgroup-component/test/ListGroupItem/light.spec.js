import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem light action', () => {
  const tree = renderer.create(<ListGroupItem light action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#818182');
  expect(tree).toHaveStyleRule('background-color', '#fdfdfe');
  expect(tree).toHaveStyleRule('color', '#818182', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#818182', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#ececf6', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem light', () => {
  const tree = renderer.create(<ListGroupItem light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#818182');
  expect(tree).toHaveStyleRule('background-color', '#fdfdfe');
});


test('Styles matches ListGroupItem light active', () => {
  const tree = renderer.create(<ListGroupItem light active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#818182');
  expect(tree).toHaveStyleRule('border-color', '#818182');
});
