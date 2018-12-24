import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Card } from '../../src';

test('Styles matches Card noRadius', () => {
  const tree = renderer.create(<Card noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
