import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Navbar } from '../../src';

test('Styles matches Navbar light', () => {
  const tree = renderer.create(<Navbar dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.5)');
  expect(tree).toHaveStyleRule('border-color', 'rgba(255,255,255,0.1)');
  expect(tree).toHaveStyleRule('background-color', '#343a40 !important');
});
