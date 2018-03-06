import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl textarea', () => {
  const tree = renderer.create(<FormControl textarea />).toJSON();
  expect(tree).toMatchSnapshot();
});
