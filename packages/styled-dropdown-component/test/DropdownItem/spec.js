import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownItem } from '../../src';

test('Styles matches DropdownItem', () => {
  const tree = renderer.create(<DropdownItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
