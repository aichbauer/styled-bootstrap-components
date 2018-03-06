import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ButtonToolbar } from '../../src';

test('Styles matches ButtonGroup', () => {
  const tree = renderer.create(<ButtonToolbar />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('justify-content', 'flex-start');
  expect(tree).toHaveStyleRule('width', 'auto');
});
