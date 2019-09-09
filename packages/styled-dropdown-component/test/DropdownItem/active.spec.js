import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownItem } from '../../src';

test('Styles matches DropdownItem active', () => {
  const tree = renderer.create(<DropdownItem active />).toJSON();
  expect(tree).toMatchSnapshot();
});
