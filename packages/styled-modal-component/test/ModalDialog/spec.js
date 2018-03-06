import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalDialog } from '../../src';

// TODO: how to check @media queries
test('Styles matches ModalDialog', () => {
  const tree = renderer.create(<ModalDialog />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('width', 'auto');
  expect(tree).toHaveStyleRule('margin', '0.5rem');
  expect(tree).toHaveStyleRule('pointer-events', 'none');
});
