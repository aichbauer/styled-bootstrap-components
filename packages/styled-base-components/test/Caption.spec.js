import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Caption } from '../src';

test('Styles matches Caption', () => {
  const tree = renderer.create(<Caption />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-top', '0.75rem');
  expect(tree).toHaveStyleRule('padding-bottom', '0.75rem');
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('text-align', 'left');
  expect(tree).toHaveStyleRule('caption-side', 'bottom');
});
