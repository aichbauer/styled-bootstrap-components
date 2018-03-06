import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl large', () => {
  const tree = renderer.create(<FormControl lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem');
  expect(tree).toHaveStyleRule('font-size', '1.25rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
});

test('Styles matches FormControl large select', () => {
  const tree = renderer.create(<FormControl lg select />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem');
  expect(tree).toHaveStyleRule('font-size', '1.25rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
  expect(tree).toHaveStyleRule('height', 'calc(2.875rem + 2px)');
});
