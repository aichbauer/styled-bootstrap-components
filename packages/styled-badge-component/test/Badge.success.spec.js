import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches success', () => {
  const tree = renderer.create(<Badge success />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches success action', () => {
  const tree = renderer.create(<Badge success action />).toJSON();
  expect(tree).toMatchSnapshot();
});
