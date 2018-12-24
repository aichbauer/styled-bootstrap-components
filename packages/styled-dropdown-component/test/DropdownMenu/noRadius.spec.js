import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu noRadius', () => {
  const tree = renderer.create(<DropdownMenu noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
