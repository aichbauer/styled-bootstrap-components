import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr warning hover', () => {
  const tree = renderer.create(<Tr warning hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#ffeeba', {
    modifier: '& > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffeeba', {
    modifier: '& > td',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '& tbody tr:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '& tbody tr:hover > th',
  });
  expect(tree).toHaveStyleRule('background-color', '#ffe8a1', {
    modifier: '& tbody tr:hover > td',
  });
});
