import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Popover } from '../../src';

test('Styles matches Popover hidden', () => {
  const tree = renderer.create(<Popover hidden />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('opacity', '0');
});
