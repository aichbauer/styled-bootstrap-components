import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

jest.useFakeTimers();

function createNodeMock() {
  return {};
}

test('Modal skips toggle on backdrop click if no backdrop', () => {
  const element = {
    focus: jest.fn(),
  };

  const tree = renderer.create(<Modal />, { createNodeMock });

  const modal = tree.getInstance();

  modal.elementTriggeredOpen = element;

  modal.close();

  jest.runAllTimers();

  expect(element.focus).toBeCalled();
});

test('Modal skips focus if returnFocusAfterClose is false', () => {
  const element = {
    focus: jest.fn(),
  };

  const tree = renderer.create(<Modal returnFocusAfterClose={false} />, { createNodeMock });

  const modal = tree.getInstance();

  modal.elementTriggeredOpen = element;

  modal.close();

  jest.runAllTimers();

  expect(element.focus).not.toBeCalled();
});
