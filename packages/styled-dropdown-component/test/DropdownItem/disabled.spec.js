import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownItem } from '../../src';

test('Styles matches DropdownItem disabled', () => {
  const tree = renderer.create(<DropdownItem disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});
