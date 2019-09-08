import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches primary', () => {
  const tree = renderer.create(<Alert primary />).toJSON();
  expect(tree).toMatchSnapshot();
});
