import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem action active', () => {
  const tree = renderer.create(<ListGroupItem action active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('cursor', 'pointer', {
    modifier: '&:focus',
  });
});

test('Styles matches ListGroupItem action', () => {
  const tree = renderer.create(<ListGroupItem action />).toJSON();
  expect(tree).toMatchSnapshot();
});
