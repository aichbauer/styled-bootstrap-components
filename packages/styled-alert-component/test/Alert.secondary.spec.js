import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches secondary', () => {
  const tree = renderer.create(<Alert secondary />).toJSON();
  expect(tree).toMatchSnapshot();
});
