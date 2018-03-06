import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Dd } from '../src';

test('Styles matches Dd', () => {
  const tree = renderer.create(<Dd />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-bottom', '0.5rem');
  expect(tree).toHaveStyleRule('margin-left', '0');
});
