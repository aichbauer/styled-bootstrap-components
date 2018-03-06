import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControlPlainText } from '../../src';

test('Styles matches FormControlPlainText', () => {
  const tree = renderer.create(<FormControlPlainText />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('padding-top', '0.375rem');
  expect(tree).toHaveStyleRule('padding-bottom', '0.375rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', 'solid transparent');
  expect(tree).toHaveStyleRule('border-width', '1px 0');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
