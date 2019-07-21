import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Transition as TransitionWithForwardingRef } from '../src';
import { TransitionWithoutForwardingRef as Transition, ENTERING, ENTERED, EXITING, EXITED } from '../src/components/transitions';

jest.useFakeTimers();

test('Wrapped transition works', () => {
  renderer.create(<TransitionWithForwardingRef />);
});

test('Callbacks successfully canceled', () => {
  let transition = renderer.create(<Transition />);
  transition.unmount();

  transition = renderer.create(<Transition />);
  jest.runAllTimers();
  transition.getInstance().nextCallback = null;
  transition.unmount();
});

test('Method forceUpdate works', () => {
  const transition = renderer.create(<Transition />);
  transition.getInstance().refTransition = { current: { scrollTop: 100 } };
  transition.getInstance().forceUpdate();
});

test('Transition works when toggling visiblity', () => {
  const transition = renderer.create(<Transition hidden />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition hidden />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition works when updaing visible', () => {
  const transition = renderer.create(<Transition />);
  transition.update(<Transition />);
  expect(transition.getInstance().state.status).toBe(ENTERING);
});

test('Transition works when updaing invisible', () => {
  const transition = renderer.create(<Transition hidden />);
  transition.update(<Transition hidden />);
  expect(transition.getInstance().state.status).toBe(EXITED);
});

test('Transition changes state correctly', () => {
  const transition = renderer.create(<Transition />);
  const instance = transition.getInstance();

  // For animations
  expect(instance.state.status).toBe(ENTERING);
  jest.runAllTimers();
  expect(instance.state.status).toBe(ENTERED);

  transition.update(<Transition hidden />);

  expect(transition.getInstance().state.status).toBe(EXITING);
  jest.runAllTimers();
  expect(transition.getInstance().state.status).toBe(EXITED);

  transition.update(<Transition />);

  // For transition
  expect(instance.state.status).toBe(ENTERING);
  jest.runAllTimers();
  expect(instance.state.status).toBe(ENTERED);
});

test('Nulled callback', () => {
  const transition = renderer.create(<Transition />);
  transition.getInstance().setNextCallback(null, 0);
  jest.runAllTimers();
});

test('Animation present when initially visible', () => {
  const transition = renderer.create(<Transition />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no enter animation', () => {
  const transition = renderer.create(<Transition hidden noEnter />);

  transition.update(<Transition noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition hidden noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no initial enter animation', () => {
  const transition = renderer.create(<Transition noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition hidden noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no exit animation', () => {
  const transition = renderer.create(<Transition hidden noExit />);

  transition.update(<Transition noExit />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition hidden noExit />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with hide on exit', () => {
  const transition = renderer.create(<Transition hidden hideOnExit />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition hideOnExit />);
  jest.runAllTimers();
  expect(transition.toJSON()).toMatchSnapshot();
});
