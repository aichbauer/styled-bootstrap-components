import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches light', () => {
  const tree = renderer.create(<Alert light />).toJSON();
  expect(tree).toMatchSnapshot();
});
