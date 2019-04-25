import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {};
}

test('Modal triggers toggle on click outside of the dialog', () => {
  const toggle = jest.fn();

  global.getComputedStyle = () => ({ opacity: 1 });

  const tree = renderer.create(<Modal toggle={toggle} />, { createNodeMock });

  const modal = tree.getInstance();

  expect(modal.refModal.current.scrollTop).toBe(0);

  modal.handleBackdropMouseDown({
    target: modal.refModal.current,
  });

  modal.handleBackdropClick({
    target: modal.refModal.current,
    stopPropagation: () => {},
  });

  expect(toggle).toBeCalled();
});
