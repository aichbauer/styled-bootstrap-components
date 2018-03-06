import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem dark action', () => {
  const tree = renderer.create(<ListGroupItem dark action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#1b1e21');
  expect(tree).toHaveStyleRule('background-color', '#c6c8ca');
  expect(tree).toHaveStyleRule('color', '#1b1e21', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#1b1e21', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#b9bbbe', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem dark', () => {
  const tree = renderer.create(<ListGroupItem dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#1b1e21');
  expect(tree).toHaveStyleRule('background-color', '#c6c8ca');
});

test('Styles matches ListGroupItem dark active', () => {
  const tree = renderer.create(<ListGroupItem dark active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#1b1e21');
  expect(tree).toHaveStyleRule('border-color', '#1b1e21');
});
