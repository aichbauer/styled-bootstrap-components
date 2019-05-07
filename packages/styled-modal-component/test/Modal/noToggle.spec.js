import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {};
}

test('Modal keeps open on click inside of the dialog', () => {
  const toggle = jest.fn();

  global.getComputedStyle = () => ({ opacity: 1 });

  const tree = renderer.create(<Modal toggle={toggle} />, { createNodeMock });

  const modal = tree.getInstance();

  modal.handleBackdropMouseDown({
    target: {},
  });

  modal.handleBackdropClick({
    target: modal.refModal.current,
    stopPropagation: () => {},
  });

  expect(toggle).not.toBeCalled();
});


test('Modal keeps open on click inside if fading in progress', () => {
  const toggle = jest.fn();

  global.getComputedStyle = () => ({ opacity: 0.5 });

  const tree = renderer.create(<Modal toggle={toggle} />, { createNodeMock });

  const modal = tree.getInstance();

  modal.handleBackdropMouseDown({
    target: modal.refModal.current,
  });

  modal.handleBackdropClick({
    target: modal.refModal.current,
    stopPropagation: () => {},
  });

  expect(toggle).not.toBeCalled();
});
