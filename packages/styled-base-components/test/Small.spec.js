import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Small } from '../src';

test('Styles matches Small', () => {
  const tree = renderer.create(<Small />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '80%');
  expect(tree).toHaveStyleRule('font-weight', '400');
});
