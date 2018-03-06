import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

// TODO: how to test nested `@media` queries
test('Styles matches Button dark expandSm toggleCollapse', () => {
  const tree = renderer.create(<Button dark expandSm toggleCollapse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});

// TODO: how to test nested `@media` queries
test('Styles matches Button light expandMd toggleCollapse', () => {
  const tree = renderer.create(<Button light expandMd toggleCollapse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});

// TODO: how to test nested `@media` queries
test('Styles matches Button dark expandMd toggleCollapse', () => {
  const tree = renderer.create(<Button dark expandLg toggleCollapse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});

// TODO: how to test nested `@media` queries
test('Styles matches Button light expandMd toggleCollapse', () => {
  const tree = renderer.create(<Button light expandXl toggleCollapse />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});
