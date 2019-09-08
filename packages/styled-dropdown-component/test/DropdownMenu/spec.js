import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu', () => {
  const tree = renderer.create(<DropdownMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
