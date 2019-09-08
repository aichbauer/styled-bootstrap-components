import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Breadcrumb } from '../src';

test('Styles matches Breadcrumb', () => {
  const tree = renderer.create(<Breadcrumb />).toJSON();
  expect(tree).toMatchSnapshot();
});
