import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl', () => {
  const tree = renderer.create(<FormControl disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});
