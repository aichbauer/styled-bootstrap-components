import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Summary } from '../src';

test('Styles matches Summary', () => {
  const tree = renderer.create(<Summary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'list-item');
  expect(tree).toHaveStyleRule('cursor', 'pointer');
});
