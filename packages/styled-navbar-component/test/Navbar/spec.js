import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Navbar } from '../../src';

test('Styles matches Navbar', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
  expect(tree).toHaveStyleRule('padding', '0.5rem 1rem');
});
