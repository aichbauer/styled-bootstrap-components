import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches danger', () => {
  const tree = renderer.create(<Alert danger />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#721c24');
  expect(tree).toHaveStyleRule('background-color', '#f8d7da');
  expect(tree).toHaveStyleRule('border-color', '#f5c6cb');
  expect(tree).toHaveStyleRule('border-top-color', '#f1b0b7', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#491217', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#491217', {
    modifier: '& > a:hover',
  });
});
