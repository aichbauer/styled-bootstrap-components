import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Img } from '../src';

test('Styles matches Img', () => {
  const tree = renderer.create(<Img />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('vertical-align', 'middle');
  expect(tree).toHaveStyleRule('border-style', 'none');
});
