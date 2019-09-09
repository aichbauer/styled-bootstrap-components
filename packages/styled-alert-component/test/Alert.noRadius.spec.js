import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches noRadius', () => {
  const tree = renderer.create(<Alert noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
});
