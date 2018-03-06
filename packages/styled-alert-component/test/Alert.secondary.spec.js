import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches secondary', () => {
  const tree = renderer.create(<Alert secondary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#383d41');
  expect(tree).toHaveStyleRule('background-color', '#e2e3e5');
  expect(tree).toHaveStyleRule('border-color', '#d6d8db');
  expect(tree).toHaveStyleRule('border-top-color', '#c8cbcf', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#202326', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#202326', {
    modifier: '& > a:hover',
  });
});
