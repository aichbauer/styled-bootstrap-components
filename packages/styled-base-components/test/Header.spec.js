import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Header } from '../src';

test('Styles matches Header', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
