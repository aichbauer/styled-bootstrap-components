import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalContent } from '../../src';

test('Styles matches ModalContent noRadius', () => {
  const tree = renderer.create(<ModalContent noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});
