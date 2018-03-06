import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Sub } from '../src';

test('Styles matches Sub', () => {
  const tree = renderer.create(<Sub />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('font-size', '75%');
  expect(tree).toHaveStyleRule('line-height', '0');
  expect(tree).toHaveStyleRule('vertical-align', 'baseline');
  expect(tree).toHaveStyleRule('bottom', '-.25em');
});
