import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches dark', () => {
  const tree = renderer.create(<Alert dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#1b1e21');
  expect(tree).toHaveStyleRule('background-color', '#d6d8d9');
  expect(tree).toHaveStyleRule('border-color', '#c6c8ca');
  expect(tree).toHaveStyleRule('border-top-color', '#b9bbbe', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#040505', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#040505', {
    modifier: '& > a:hover',
  });
});
