import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dt } from '../src';

test('Styles matches Dt', () => {
  const tree = renderer.create(<Dt />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-weight', '700');
});
