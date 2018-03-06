import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Pre } from '../src';

test('Styles matches Pre', () => {
  const tree = renderer.create(<Pre />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-top', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
});
