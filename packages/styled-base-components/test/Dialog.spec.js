import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dialog } from '../src';

test('Styles matches Dialog', () => {
  const tree = renderer.create(<Dialog />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
