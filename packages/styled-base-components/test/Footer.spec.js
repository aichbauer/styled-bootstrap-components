import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Footer } from '../src';

test('Styles matches Footer', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
});
