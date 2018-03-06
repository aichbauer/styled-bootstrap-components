import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Code } from '../src';

test('Styles matches Code', () => {
  const tree = renderer.create(<Code />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace');
  expect(tree).toHaveStyleRule('font-size', '87.5%');
  expect(tree).toHaveStyleRule('color', '#e83e8c');
  expect(tree).toHaveStyleRule('word-break', 'break-word');
});
