import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownDivider } from '../../src';

test('Styles matches DropdownDivider', () => {
  const tree = renderer.create(<DropdownDivider />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('height', '0');
  expect(tree).toHaveStyleRule('padding-top', '0.5rem');
  expect(tree).toHaveStyleRule('margin-top', '0.6rem');
  expect(tree).toHaveStyleRule('overflow', 'hidden');
  expect(tree).toHaveStyleRule('border-top', '1px solid #e9ecef');
});
