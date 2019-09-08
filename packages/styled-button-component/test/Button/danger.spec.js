import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button danger disabled', () => {
  const tree = renderer.create(<Button danger disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Button danger', () => {
  const tree = renderer.create(<Button danger />).toJSON();
  expect(tree).toMatchSnapshot();
});
