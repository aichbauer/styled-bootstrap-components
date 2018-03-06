import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalFooter } from '../../src';

test('Styles matches ModalFooter', () => {
  const tree = renderer.create(<ModalFooter />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'flex-end');
  expect(tree).toHaveStyleRule('padding', '1rem');
  expect(tree).toHaveStyleRule('border-top', '1px solid rgba(0,0,0,0.125)');
});
