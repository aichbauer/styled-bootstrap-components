import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalContent } from '../../src';

test('Styles matches ModalContent', () => {
  const tree = renderer.create(<ModalContent />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('pointer-events', 'auto');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('background-clip', 'padding-box');
  expect(tree).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.2)');
  expect(tree).toHaveStyleRule('border-radius', '0.3rem');
  expect(tree).toHaveStyleRule('outline', '0');
});
