import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormCheckInput } from '../../src';

test('Styles matches FormCheckInput', () => {
  const tree = renderer.create(<FormCheckInput />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('margin-top', '0.3rem');
  expect(tree).toHaveStyleRule('margin-left', '-1.25rem');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
