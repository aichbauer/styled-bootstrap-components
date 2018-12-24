import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Breadcrumb } from '../src';

test('Styles matches Breadcrumb pill', () => {
  const tree = renderer.create(<Breadcrumb pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
