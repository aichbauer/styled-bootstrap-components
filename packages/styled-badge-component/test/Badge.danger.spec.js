import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches danger', () => {
  const tree = renderer.create(<Badge danger />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches danger action', () => {
  const tree = renderer.create(<Badge danger action />).toJSON();
  expect(tree).toMatchSnapshot();
});
