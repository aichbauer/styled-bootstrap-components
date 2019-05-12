import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu fill', () => {
  const tree = renderer.create(<DropdownMenu fullWidth />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('min-width', '100%');
});
