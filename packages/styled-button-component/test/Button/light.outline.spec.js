import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button light outline disabled', () => {
  const tree = renderer.create(<Button light outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Button light outline', () => {
  const tree = renderer.create(<Button light outline />).toJSON();
  expect(tree).toMatchSnapshot();
});
