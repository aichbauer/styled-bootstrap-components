import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light disabled', () => {
  const tree = renderer.create(<Button light disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Button light', () => {
  const tree = renderer.create(<Button light />).toJSON();
  expect(tree).toMatchSnapshot();
});
