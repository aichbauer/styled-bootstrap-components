import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches danger', () => {
  const tree = renderer.create(<Alert danger />).toJSON();
  expect(tree).toMatchSnapshot();
});
