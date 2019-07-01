import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Transition } from '../src';
import { ENTERING, EXITED } from '../src/components/transitions';

test('Transition works when toggling visiblity', () => {
  const transition = renderer.create(<Transition />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition visible />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition works when updaing visible', () => {
  const transition = renderer.create(<Transition visible />);
  transition.update(<Transition visible />);
  expect(transition.getInstance().state.status).toBe(ENTERING);
});

test('Transition works when updaing invisible', () => {
  const transition = renderer.create(<Transition />);
  transition.update(<Transition />);
  expect(transition.getInstance().state.status).toBe(EXITED);
});

test('Animation present when initially visible', () => {
  const transition = renderer.create(<Transition visible />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no enter animation', () => {
  const transition = renderer.create(<Transition noEnter />);

  transition.update(<Transition visible noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition noEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no initial enter animation', () => {
  const transition = renderer.create(<Transition visible noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition noInitialEnter />);
  expect(transition.toJSON()).toMatchSnapshot();
});

test('Transition with no exit animation', () => {
  const transition = renderer.create(<Transition noExit />);

  transition.update(<Transition visible noExit />);
  expect(transition.toJSON()).toMatchSnapshot();

  transition.update(<Transition noExit />);
  expect(transition.toJSON()).toMatchSnapshot();
});
