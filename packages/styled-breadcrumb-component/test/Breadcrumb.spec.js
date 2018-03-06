import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Breadcrumb } from '../src';

test('Styles matches Breadcrumb', () => {
  const tree = renderer.create(<Breadcrumb />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('padding', '0.75rem 1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('list-style', 'none');
  expect(tree).toHaveStyleRule('background-color', '#e9ecef');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
});
