import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Blockquote } from '../src';

test('Styles matches Blockquote', () => {
  const tree = renderer.create(<Blockquote />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin', '0 0 1rem');
});
