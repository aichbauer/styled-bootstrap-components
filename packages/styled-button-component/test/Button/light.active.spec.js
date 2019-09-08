import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light active', () => {
  const tree = renderer.create(<Button light active />).toJSON();
  expect(tree).toMatchSnapshot();
});
