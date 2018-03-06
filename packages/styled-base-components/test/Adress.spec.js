import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Address } from '../src';

test('Styles matches Address', () => {
  const tree = renderer.create(<Address />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('font-style', 'normal');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
});
