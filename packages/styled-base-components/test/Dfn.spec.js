import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dfn } from '../src';

test('Styles matches Dfn', () => {
  const tree = renderer.create(<Dfn />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-style', 'italic');
});
