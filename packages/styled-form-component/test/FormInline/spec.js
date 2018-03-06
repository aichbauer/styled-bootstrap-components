import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormInline } from '../../src';

test('Styles matches FormGroup', () => {
  const tree = renderer.create(<FormInline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-flow', 'row wrap');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
