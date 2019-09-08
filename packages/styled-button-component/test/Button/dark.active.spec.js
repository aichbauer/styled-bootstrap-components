import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button dark active', () => {
  const tree = renderer.create(<Button dark active />).toJSON();
  expect(tree).toMatchSnapshot();
});
