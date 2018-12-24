import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl pill', () => {
  const tree = renderer.create(<FormControl pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
