import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalBackdrop } from '../../src';

test('Styles matches ModalBackdrop', () => {
  const tree = renderer.create(<ModalBackdrop backdrop="static" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('pointer-events', 'none');
});
