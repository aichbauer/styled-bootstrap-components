import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button large', () => {
  const tree = renderer.create(<Button lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem');
  expect(tree).toHaveStyleRule('font-size', '1.25rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
});
