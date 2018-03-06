import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button small', () => {
  const tree = renderer.create(<Button sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.5rem');
  expect(tree).toHaveStyleRule('font-size', '0.875rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.2rem');
});
