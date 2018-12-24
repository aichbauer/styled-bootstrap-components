import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem disabled', () => {
  const tree = renderer.create(<ListGroupItem disabled action />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '& > a:hover',
  });
});
