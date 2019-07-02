import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Transition as TransitionWithForwardingRef } from '../src';
import { TransitionWithoutForwardingRef as Transition, ENTER, EXIT } from '../src/components/transitions';

test('Wrapped transition works', () => {
  renderer.create(<TransitionWithForwardingRef />);
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
  expect(transition.getInstance().state.status).toBe(ENTER);
});

test('Transition works when updaing invisible', () => {
  const transition = renderer.create(<Transition hidden />);
  transition.update(<Transition hidden />);
  expect(transition.getInstance().state.status).toBe(EXIT);
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
