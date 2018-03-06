import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Pre } from '../src';

test('Styles matches Pre', () => {
  const tree = renderer.create(<Pre />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace');
  expect(tree).toHaveStyleRule('font-size', '87.5%');
  expect(tree).toHaveStyleRule('overflow', 'auto');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('color', '#212529');
});
