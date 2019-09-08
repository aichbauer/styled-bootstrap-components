import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardTitle } from '../../src';

test('Styles matches CardTitle h1', () => {
  const tree = renderer.create(<CardTitle h1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h1', () => {
  const tree = renderer.create(<CardTitle h1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h2', () => {
  const tree = renderer.create(<CardTitle h2 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h3', () => {
  const tree = renderer.create(<CardTitle h3 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h4', () => {
  const tree = renderer.create(<CardTitle h4 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h5', () => {
  const tree = renderer.create(<CardTitle h5 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle h6', () => {
  const tree = renderer.create(<CardTitle h6 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle muted', () => {
  const tree = renderer.create(<CardTitle h6 muted />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches CardTitle subtitle', () => {
  const tree = renderer.create(<CardTitle subtitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
