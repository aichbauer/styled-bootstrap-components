import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormText } from '../../src';

test('Styles matches FormText', () => {
  const tree = renderer.create(<FormText />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('margin-top', '0.25rem');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
});
