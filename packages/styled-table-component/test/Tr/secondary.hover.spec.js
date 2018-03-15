import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr secondary hover', () => {
  const tree = renderer.create(<Tr secondary hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#d6d8db', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#d6d8db', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#c8cbcf', {
    modifier: '& tbody tr:hover > td',
  });
});
