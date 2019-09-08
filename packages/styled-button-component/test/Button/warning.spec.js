import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button warning disabled', () => {
  const tree = renderer.create(<Button warning disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Button warning', () => {
  const tree = renderer.create(<Button warning />).toJSON();
  expect(tree).toMatchSnapshot();
});
