import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl small', () => {
  const tree = renderer.create(<FormControl sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.5rem');
  expect(tree).toHaveStyleRule('font-size', '0.875rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.2rem');
});

test('Styles matches FormControl small select', () => {
  const tree = renderer.create(<FormControl sm select />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.5rem');
  expect(tree).toHaveStyleRule('font-size', '0.875rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.2rem');
  expect(tree).toHaveStyleRule('height', 'calc(1.8125rem + 2px)');
});
