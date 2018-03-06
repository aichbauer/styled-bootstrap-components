import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches warning', () => {
  const tree = renderer.create(<Alert warning />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#856404');
  expect(tree).toHaveStyleRule('background-color', '#fff3cd');
  expect(tree).toHaveStyleRule('border-color', '#ffeeba');
  expect(tree).toHaveStyleRule('border-top-color', '#ffe8a1', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#533f03', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#533f03', {
    modifier: '& > a:hover',
  });
});
