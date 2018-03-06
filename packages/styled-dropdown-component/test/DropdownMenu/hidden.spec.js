import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { DropdownMenu } from '../../src';

test('Styles matches DropdownMenu hidden', () => {
  const tree = renderer.create(<DropdownMenu hidden />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'none');
});
