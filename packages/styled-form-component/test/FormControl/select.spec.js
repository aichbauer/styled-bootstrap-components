import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl select', () => {
  const tree = renderer.create(<FormControl select />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('height', 'calc(2.25rem + 2px)');
});
