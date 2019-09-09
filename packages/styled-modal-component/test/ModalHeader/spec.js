import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ModalHeader } from '../../src';

test('Styles matches ModalHeader', () => {
  const tree = renderer.create(<ModalHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
