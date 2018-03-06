import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem danger action', () => {
  const tree = renderer.create(<ListGroupItem danger action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#721c24');
  expect(tree).toHaveStyleRule('background-color', '#f5c6cb');
  expect(tree).toHaveStyleRule('color', '#721c24', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#721c24', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#f1b0b7', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem danger', () => {
  const tree = renderer.create(<ListGroupItem danger />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#721c24');
  expect(tree).toHaveStyleRule('background-color', '#f5c6cb');
});

test('Styles matches ListGroupItem danger active', () => {
  const tree = renderer.create(<ListGroupItem danger active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('z-index', '2');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#721c24');
  expect(tree).toHaveStyleRule('border-color', '#721c24');
});

