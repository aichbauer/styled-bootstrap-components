import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button split sm', () => {
  const tree = renderer.create(<Button split sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0');
  expect(tree).toHaveStyleRule('padding-right', '0.375rem');
  expect(tree).toHaveStyleRule('padding-left', '0.375rem');
  expect(tree).toHaveStyleRule('margin-left', '0', {
    modifier: '&::after',
  });
});

test('Styles matches Button split lg', () => {
  const tree = renderer.create(<Button split lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0');
  expect(tree).toHaveStyleRule('padding-right', '0.75rem');
  expect(tree).toHaveStyleRule('padding-left', '0.75rem');
  expect(tree).toHaveStyleRule('margin-left', '0', {
    modifier: '&::after',
  });
});

test('Styles matches Button split', () => {
  const tree = renderer.create(<Button split />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0');
  expect(tree).toHaveStyleRule('padding-right', '0.5625rem');
  expect(tree).toHaveStyleRule('padding-left', '0.5625rem');
  expect(tree).toHaveStyleRule('margin-left', '0', {
    modifier: '&::after',
  });
});
