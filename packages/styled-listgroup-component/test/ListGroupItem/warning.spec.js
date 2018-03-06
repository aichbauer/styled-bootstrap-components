import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem warning action', () => {
  const tree = renderer.create(<ListGroupItem warning action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#856404');
  expect(tree).toHaveStyleRule('background-color', '#ffeeba');
  expect(tree).toHaveStyleRule('color', '#856404', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#856404', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem warning', () => {
  const tree = renderer.create(<ListGroupItem warning />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#856404');
  expect(tree).toHaveStyleRule('background-color', '#ffeeba');
});

test('Styles matches ListGroupItem warning active', () => {
  const tree = renderer.create(<ListGroupItem warning active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#856404');
  expect(tree).toHaveStyleRule('border-color', '#856404');
});
