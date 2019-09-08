import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl invalid', () => {
  const tree = renderer.create(<FormControl invalid />).toJSON();
  expect(tree).toMatchSnapshot();
});
