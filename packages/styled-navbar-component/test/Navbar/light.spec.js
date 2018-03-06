import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Navbar } from '../../src';

test('Styles matches Navbar light', () => {
  const tree = renderer.create(<Navbar light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.5)');
  expect(tree).toHaveStyleRule('border-color', 'rgba(0,0,0,0.1)');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa !important');
});
