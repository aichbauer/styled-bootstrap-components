import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Figcaption } from '../src';

test('Styles matches Figcaption', () => {
  const tree = renderer.create(<Figcaption />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
