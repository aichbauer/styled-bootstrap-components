import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches warning', () => {
  const tree = renderer.create(<Badge warning />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches warning action', () => {
  const tree = renderer.create(<Badge warning action />).toJSON();
  expect(tree).toMatchSnapshot();
});
