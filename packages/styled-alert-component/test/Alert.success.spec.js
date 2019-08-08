import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches success', () => {
  const tree = renderer.create(<Alert success />).toJSON();
  expect(tree).toMatchSnapshot();
});
