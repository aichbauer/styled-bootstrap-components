import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Badge } from '../src';

test('Styles matches primary', () => {
  const tree = renderer.create(<Badge primary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
});

test('Styles matches primary action', () => {
  const tree = renderer.create(<Badge primary action />).toJSON();
  expect(tree).toMatchSnapshot();
});

