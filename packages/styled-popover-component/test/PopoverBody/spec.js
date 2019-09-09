
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverBody } from '../../src';

test('Styles matches PopoverBody', () => {
  const tree = renderer.create(<PopoverBody />).toJSON();
  expect(tree).toMatchSnapshot();
});
