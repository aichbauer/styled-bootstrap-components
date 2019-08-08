import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button secondary active', () => {
  const tree = renderer.create(<Button secondary active />).toJSON();
  expect(tree).toMatchSnapshot();
});
