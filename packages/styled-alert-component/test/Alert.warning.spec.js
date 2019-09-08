import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches warning', () => {
  const tree = renderer.create(<Alert warning />).toJSON();
  expect(tree).toMatchSnapshot();
});
