import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { B } from '../src';

test('Styles matches B', () => {
  const tree = renderer.create(<B />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-weight', 'bolder');
});
