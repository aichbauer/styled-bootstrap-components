import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownItem } from '../../src';

test('Styles matches DropdownItem active', () => {
  const tree = renderer.create(<DropdownItem active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('text-decoration', 'none');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
});
