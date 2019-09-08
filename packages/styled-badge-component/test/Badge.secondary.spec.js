import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches secondary', () => {
  const tree = renderer.create(<Badge secondary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches secondary action', () => {
  const tree = renderer.create(<Badge secondary action />).toJSON();
  expect(tree).toMatchSnapshot();
});
