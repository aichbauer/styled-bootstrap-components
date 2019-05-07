import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalWrapper } from '../../src';

// TODO: how to check @media queries
test('Styles matches ModalWrapper', () => {
  const tree = renderer.create(<ModalWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'fixed');
  expect(tree).toHaveStyleRule('top', '0');
  expect(tree).toHaveStyleRule('right', '0');
  expect(tree).toHaveStyleRule('bottom', '0');
  expect(tree).toHaveStyleRule('left', '0');
  expect(tree).toHaveStyleRule('z-index', '1050');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('overflow', 'hidden');
  expect(tree).toHaveStyleRule('outline', '0');
  expect(tree).toHaveStyleRule('overflow-x', 'hidden');
  expect(tree).toHaveStyleRule('overflow-y', 'auto');
});
