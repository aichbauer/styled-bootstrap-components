import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Jumbotron } from '../src';

test('Styles matches Jumbotron noRadius', () => {
  const tree = renderer.create(<Jumbotron noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
