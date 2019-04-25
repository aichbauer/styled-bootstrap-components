import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Modal } from '../../src';

function createNodeMock() {
  return {};
}

test('Modal closes on componentDidUpdate', () => {
  const tree = renderer.create(<Modal />, { createNodeMock });

  const modal = tree.getInstance();

  modal.close = jest.fn();
  modal.open = jest.fn();

  modal.state = { hidden: false };
  modal.props = { hidden: true };

  modal.componentDidUpdate({ hidden: true }, { hidden: true });

  expect(modal.open).toBeCalled();
  expect(modal.close).not.toBeCalled();
});

test('Modal opens on componentDidUpdate', () => {
  const tree = renderer.create(<Modal />, { createNodeMock });

  const modal = tree.getInstance();

  modal.close = jest.fn();
  modal.open = jest.fn();

  modal.state = { hidden: true };
  modal.props = { hidden: true };

  modal.componentDidUpdate({ hidden: true }, { hidden: false });

  expect(modal.open).not.toBeCalled();
  expect(modal.close).toBeCalled();
});

test('Modal updates state on componentDidUpdate', () => {
  const tree = renderer.create(<Modal />, { createNodeMock });

  const modal = tree.getInstance();

  modal.setState = jest.fn();

  modal.props = { hidden: false };

  modal.componentDidUpdate({ hidden: true }, { hidden: false });

  expect(modal.setState).toBeCalled();
});
