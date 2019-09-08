import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { InputGroupText } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > span + &:not(:last-child)
test('Styles matches InputGroupText', () => {
  const tree = renderer.create(<InputGroupText />).toJSON();
  expect(tree).toMatchSnapshot();
});
