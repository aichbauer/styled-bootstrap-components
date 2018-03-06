import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Jumbotron } from '../src';

test('Styles matches Jumbotron fluid', () => {
  const tree = renderer.create(<Jumbotron fluid />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding-right', '0');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('border-radius', '0');
});
