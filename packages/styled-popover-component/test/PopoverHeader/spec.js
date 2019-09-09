
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverHeader } from '../../src';

test('Styles matches PopoverHeader', () => {
  const tree = renderer.create(<PopoverHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h1', () => {
  const tree = renderer.create(<PopoverHeader h1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h2', () => {
  const tree = renderer.create(<PopoverHeader h2 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h3', () => {
  const tree = renderer.create(<PopoverHeader h3 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h4', () => {
  const tree = renderer.create(<PopoverHeader h4 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h5', () => {
  const tree = renderer.create(<PopoverHeader h5 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h6', () => {
  const tree = renderer.create(<PopoverHeader h6 />).toJSON();
  expect(tree).toMatchSnapshot();
});
