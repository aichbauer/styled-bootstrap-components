import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

test('Styles matches Modal lg', () => {
  const tree = renderer.create(<Modal lg />, { createNodeMock: () => ({}) }).toJSON();
  expect(tree).toMatchSnapshot();
});
