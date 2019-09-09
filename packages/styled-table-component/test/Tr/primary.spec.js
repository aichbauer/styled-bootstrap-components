import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr primary hover', () => {
  const tree = renderer.create(<Tr primary hover />).toJSON();
  expect(tree).toMatchSnapshot();
});
