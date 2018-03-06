import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Legend } from '../src';

test('Styles matches Legend', () => {
  const tree = renderer.create(<Legend />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('max-width', '100%');
  expect(tree).toHaveStyleRule('padding', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '0.5rem');
  expect(tree).toHaveStyleRule('font-size', '1.5rem');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
  expect(tree).toHaveStyleRule('color', 'inherit');
  expect(tree).toHaveStyleRule('white-space', 'normal');
});
