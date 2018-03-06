import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Column } from '../../src';

// TODO: how to check @media queries
test('Styles matches Column', () => {
  const tree = renderer.create(<Column />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  expect(tree).toHaveStyleRule('padding-right', '15px');
  expect(tree).toHaveStyleRule('padding-left', '15px');
  expect(tree).toHaveStyleRule('flex', '0 0 100%');
  expect(tree).toHaveStyleRule('overflow', 'hidden');
  expect(tree).toHaveStyleRule('word-break', 'break-all');
});
