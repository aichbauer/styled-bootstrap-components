import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Strong } from '../src';

test('Styles matches Strong', () => {
  const tree = renderer.create(<Strong />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-weight', 'bolder');
});
