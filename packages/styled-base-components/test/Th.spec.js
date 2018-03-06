import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Th } from '../src';

test('Styles matches Th', () => {
  const tree = renderer.create(<Th />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('text-align', 'inherit');
});
