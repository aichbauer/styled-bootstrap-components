import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControlPlainText } from '../../src';

test('Styles matches FormControlPlainText small', () => {
  const tree = renderer.create(<FormControlPlainText sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
});

test('Styles matches FormControlPlainText large', () => {
  const tree = renderer.create(<FormControlPlainText lg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
});
