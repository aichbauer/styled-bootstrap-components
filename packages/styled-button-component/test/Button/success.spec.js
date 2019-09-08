import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button success disabled', () => {
  const tree = renderer.create(<Button success disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Button success', () => {
  const tree = renderer.create(<Button success />).toJSON();
  expect(tree).toMatchSnapshot();
});
