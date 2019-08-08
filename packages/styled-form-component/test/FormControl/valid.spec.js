import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl valid', () => {
  const tree = renderer.create(<FormControl valid />).toJSON();
  expect(tree).toMatchSnapshot();
});
