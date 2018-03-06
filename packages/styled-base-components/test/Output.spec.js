import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Output } from '../src';

test('Styles matches Output', () => {
  const tree = renderer.create(<Output />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
});
