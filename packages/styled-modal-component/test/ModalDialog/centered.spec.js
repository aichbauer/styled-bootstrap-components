import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalDialog } from '../../src';

// TODO: how to check @media queries
test('Styles matches ModalDialog', () => {
  const tree = renderer.create(<ModalDialog centered />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('min-height', 'calc(100% - (0.5rem * 2))');
});
