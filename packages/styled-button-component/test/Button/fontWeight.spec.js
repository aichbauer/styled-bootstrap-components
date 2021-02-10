import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toHaveStyleRule('font-weight', '400');
});
