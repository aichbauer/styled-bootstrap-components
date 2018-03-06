import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches info', () => {
  const tree = renderer.create(<Alert info />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#0c5460');
  expect(tree).toHaveStyleRule('background-color', '#d1ecf1');
  expect(tree).toHaveStyleRule('border-color', '#bee5eb');
  expect(tree).toHaveStyleRule('border-top-color', '#abdde5', {
    modifier: '& > hr',
  });
  expect(tree).toHaveStyleRule('color', '#062c33', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', '#062c33', {
    modifier: '& > a:hover',
  });
});
