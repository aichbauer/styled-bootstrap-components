import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Abbr } from '../src';

test('Styles matches Abbr', () => {
  const tree = renderer.create(<Abbr />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('text-decoration', 'underline dotted');
  expect(tree).toHaveStyleRule('cursor', 'help');
  expect(tree).toHaveStyleRule('border-bottom', '0');
});
