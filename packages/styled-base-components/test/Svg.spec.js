import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Svg } from '../src';

test('Styles matches Svg', () => {
  const tree = renderer.create(<Svg />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('overflow', 'hidden', {
    modifier: '&:not(:root)'
  });
});
