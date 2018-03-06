import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Main } from '../src';

test('Styles matches Main', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
