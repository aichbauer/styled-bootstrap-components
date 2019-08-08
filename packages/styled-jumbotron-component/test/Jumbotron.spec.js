import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Jumbotron } from '../src';

test('Styles matches Jumbotron', () => {
  const tree = renderer.create(<Jumbotron />).toJSON();
  expect(tree).toMatchSnapshot();
});
