import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Figure } from '../src';

test('Styles matches Figure', () => {
  const tree = renderer.create(<Figure />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('margin', '0 0 1rem');
});
