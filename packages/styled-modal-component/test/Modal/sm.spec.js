import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

test('Styles matches Modal sm', () => {
  const tree = renderer.create(<Modal sm />, { createNodeMock: () => ({}) }).toJSON();
  expect(tree).toMatchSnapshot();
});
