import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches dark', () => {
  const tree = renderer.create(<Alert dark />).toJSON();
  expect(tree).toMatchSnapshot();
});
