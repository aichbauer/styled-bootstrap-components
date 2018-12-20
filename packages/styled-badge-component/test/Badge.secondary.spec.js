import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches secondary', () => {
  const tree = renderer.create(<Badge secondary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#6c757d');
});

test('Styles matches secondary action', () => {
  const tree = renderer.create(<Badge secondary action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#6c757d');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('background-color', '#545b62', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#545b62', {
    modifier: '&:focus',
  });
});
