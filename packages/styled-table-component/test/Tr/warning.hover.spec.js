import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr warning hover', () => {
  const tree = renderer.create(<Tr warning hover />).toJSON();
  expect(tree).toMatchSnapshot();
});
