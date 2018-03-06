import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dropdown } from '../../src';

test('Styles matches Dropdown', () => {
  const tree = renderer.create(<Dropdown />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
});
