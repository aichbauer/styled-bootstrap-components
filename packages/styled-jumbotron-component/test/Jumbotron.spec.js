import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Jumbotron } from '../src';

test('Styles matches Jumbotron', () => {
  const tree = renderer.create(<Jumbotron />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '2rem 1rem');
  expect(tree).toHaveStyleRule('margin-bottom', '2rem');
  expect(tree).toHaveStyleRule('background-color', '#e9ecef');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
});
