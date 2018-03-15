import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr success hover', () => {
  const tree = renderer.create(<Tr success hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#c3e6cb', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#c3e6cb', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#b1dfbb', {
    modifier: '& tbody tr:hover > td',
  });
});
