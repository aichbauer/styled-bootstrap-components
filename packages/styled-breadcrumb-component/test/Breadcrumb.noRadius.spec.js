import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Breadcrumb } from '../src';

test('Styles matches Breadcrumb noRadius', () => {
  const tree = renderer.create(<Breadcrumb noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
