import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl noRadius', () => {
  const tree = renderer.create(<FormControl noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
