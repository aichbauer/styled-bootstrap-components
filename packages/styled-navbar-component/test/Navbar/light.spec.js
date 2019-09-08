import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Navbar } from '../../src';

test('Styles matches Navbar light', () => {
  const tree = renderer.create(<Navbar light />).toJSON();
  expect(tree).toMatchSnapshot();
});
