import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownDivider } from '../../src';

test('Styles matches DropdownDivider', () => {
  const tree = renderer.create(<DropdownDivider />).toJSON();
  expect(tree).toMatchSnapshot();
});
