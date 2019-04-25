import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {};
}

// TODO: how to check @media queries
test('Modal skip toggle on backdrop click if no backdrop', () => {
  const toggle = jest.fn();

  global.getComputedStyle = jest.fn(() => ({ opacity: 1 }));

  const tree = renderer.create(
    <Modal backdrop={false} toggle={toggle} />,
    { createNodeMock },
  );

  const modal = tree.getInstance();

  const canToggle = modal.canToggle({
    target: {},
  });

  expect(canToggle).toBe(false);
  expect(toggle).not.toBeCalled();
  expect(global.getComputedStyle).not.toBeCalled();
});
