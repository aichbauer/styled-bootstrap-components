import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches pill', () => {
  const tree = renderer.create(<Alert pill />).toJSON();
  expect(tree).toMatchSnapshot();
});
