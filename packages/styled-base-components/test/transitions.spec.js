import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Transition } from '../src';
import { TransitionRaw, ENTER, EXIT } from '../src/components/transitions';

test('Wrapped transition works', () => {
  renderer.create(<Transition />);
});

test('Transition works when toggling visiblity', () => {
  const transition = renderer.create(<TransitionRaw />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<TransitionRaw visible />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<TransitionRaw />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition works when updaing visible', () => {
  const transition = renderer.create(<TransitionRaw visible />);
  transition.update(<TransitionRaw visible />);
  expect(transition.getInstance().state.status).toBe(ENTER);
});

test('Transition works when updaing invisible', () => {
  const transition = renderer.create(<TransitionRaw />);
  transition.update(<TransitionRaw />);
  expect(transition.getInstance().state.status).toBe(EXIT);
});

test('Animation present when initially visible', () => {
  const transition = renderer.create(<TransitionRaw visible />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no enter animation', () => {
  const transition = renderer.create(<TransitionRaw noEnter />);

  transition.update(<TransitionRaw visible noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<TransitionRaw noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no initial enter animation', () => {
  const transition = renderer.create(<TransitionRaw visible noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<TransitionRaw noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no exit animation', () => {
  const transition = renderer.create(<TransitionRaw noExit />);

  transition.update(<TransitionRaw visible noExit />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition noExit />);
  expect(transition.toJSON()).toMatchSnapshot();
});
