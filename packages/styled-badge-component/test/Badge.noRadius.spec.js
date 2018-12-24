import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches noRadius', () => {
  const tree = renderer.create(<Badge noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.4rem');
  expect(tree).toHaveStyleRule('border-radius', '0');
});
