import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Optgroup } from '../src';

test('Styles matches Optgroup', () => {
  const tree = renderer.create(<Optgroup />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin', '0');
  expect(tree).toHaveStyleRule('font-family', 'inherit');
  expect(tree).toHaveStyleRule('font-size', 'inherit');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
});
