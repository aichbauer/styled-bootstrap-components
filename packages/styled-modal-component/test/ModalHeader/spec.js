import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalHeader } from '../../src';

test('Styles matches ModalHeader', () => {
  const tree = renderer.create(<ModalHeader />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
  expect(tree).toHaveStyleRule('justify-content', 'space-between');
  expect(tree).toHaveStyleRule('padding', '1rem');
  expect(tree).toHaveStyleRule('border-bottom', '1px solid rgba(0,0,0,0.125)');
  expect(tree).toHaveStyleRule('border-top-left-radius', '0.3rem');
  expect(tree).toHaveStyleRule('border-top-right-radius', '0.3rem');
});
