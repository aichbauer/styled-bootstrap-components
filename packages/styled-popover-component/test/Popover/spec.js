import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover', () => {
  const tree = renderer.create(<Popover />).toJSON();
  expect(tree).toMatchSnapshot();
});
