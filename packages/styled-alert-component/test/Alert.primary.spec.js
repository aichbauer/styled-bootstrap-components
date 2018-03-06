import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches primary', () => {
  const tree = renderer.create(<Alert primary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#004085');
  expect(tree).toHaveStyleRule('background-color', '#cce5ff');
  expect(tree).toHaveStyleRule('border-color', '#b8daff');
  expect(tree).toHaveStyleRule('border-top-color', '#9fcdff', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#002752', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#002752', {
    modifier: '& > a:hover',
  });
});
