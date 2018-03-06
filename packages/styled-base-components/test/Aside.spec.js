import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Aside } from '../src';

test('Styles matches Aside', () => {
  const tree = renderer.create(<Aside />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
