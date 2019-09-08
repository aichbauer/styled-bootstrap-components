import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches light', () => {
  const tree = renderer.create(<Badge light />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches light action', () => {
  const tree = renderer.create(<Badge light action />).toJSON();
  expect(tree).toMatchSnapshot();
});
