import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalBackdrop } from '../../src';

test('Styles matches ModalBackdrop', () => {
  const tree = renderer.create(<ModalBackdrop />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('pointer-events', undefined);
  expect(tree).toHaveStyleRule('z-index', '1040');
  expect(tree).toHaveStyleRule('opacity', '0.7');
  expect(tree).toHaveStyleRule('position', 'fixed');
  expect(tree).toHaveStyleRule('top', '0');
  expect(tree).toHaveStyleRule('left', '0');
});
