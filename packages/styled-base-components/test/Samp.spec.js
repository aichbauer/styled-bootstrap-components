import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Samp } from '../src';

test('Styles matches Samp', () => {
  const tree = renderer.create(<Samp />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace');
  expect(tree).toHaveStyleRule('font-size', '1em');
});
