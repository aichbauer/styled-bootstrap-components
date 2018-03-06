import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Textarea } from '../src';

test('Styles matches Textarea', () => {
  const tree = renderer.create(<Textarea />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin', '0');
  expect(tree).toHaveStyleRule('font-family', 'inherit');
  expect(tree).toHaveStyleRule('font-size', 'inherit');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
  expect(tree).toHaveStyleRule('overflow', 'auto');
  expect(tree).toHaveStyleRule('resize', 'vertical');
});
