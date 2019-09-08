import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalFooter } from '../../src';

test('Styles matches ModalFooter', () => {
  const tree = renderer.create(<ModalFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
