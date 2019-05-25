import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu right', () => {
  const tree = renderer.create(<DropdownMenu right />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('right', '0');
});
