import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Article } from '../src';

test('Styles matches Article', () => {
  const tree = renderer.create(<Article />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
