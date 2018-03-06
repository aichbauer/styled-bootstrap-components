import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Progress } from '../src';

test('Styles matches Progress', () => {
  const tree = renderer.create(<Progress />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('vertical-align', 'baseline');
});
