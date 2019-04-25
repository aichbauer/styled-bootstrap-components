import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {};
}

test('Modal closed on unmount', () => {
  const tree = renderer.create(<Modal />, { createNodeMock });

  const modal = tree.getInstance();

  modal.close = jest.fn();

  modal.componentWillUnmount();

  expect(modal.close).toBeCalled();
});
