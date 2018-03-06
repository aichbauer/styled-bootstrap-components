import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControlFile } from '../../src';

test('Styles matches FormControlFile', () => {
  const tree = renderer.create(<FormControlFile />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
