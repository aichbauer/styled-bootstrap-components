import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Hr } from '../src';

test('Styles matches Hr', () => {
  const tree = renderer.create(<Hr />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('box-sizing', 'content-box');
  expect(tree).toHaveStyleRule('height', '0');
  expect(tree).toHaveStyleRule('overflow', 'visible');
  expect(tree).toHaveStyleRule('margin-top', '1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('border', '0');
  expect(tree).toHaveStyleRule('border-top', '1px solid rgba(0,0,0,0.1)');
});
