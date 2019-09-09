import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Tr } from '../../src';

test('Styles matches Tr info hover', () => {
  const tree = renderer.create(<Tr info hover />).toJSON();
  expect(tree).toMatchSnapshot();
});
