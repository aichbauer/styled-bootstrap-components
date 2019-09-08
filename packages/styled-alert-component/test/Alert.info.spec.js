import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches info', () => {
  const tree = renderer.create(<Alert info />).toJSON();
  expect(tree).toMatchSnapshot();
});
