import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches success', () => {
  const tree = renderer.create(<Alert success />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#155724');
  expect(tree).toHaveStyleRule('background-color', '#d4edda');
  expect(tree).toHaveStyleRule('border-color', '#c3e6cb');
  expect(tree).toHaveStyleRule('border-top-color', '#b1dfbb', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#0b2e13', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#0b2e13', {
    modifier: '& > a:hover',
  });
});
