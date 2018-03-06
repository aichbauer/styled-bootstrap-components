import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalBody } from '../../src';

test('Styles matches ModalBody', () => {
  const tree = renderer.create(<ModalBody />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('flex', '1 1 auto');
  expect(tree).toHaveStyleRule('padding', '1rem');
});
