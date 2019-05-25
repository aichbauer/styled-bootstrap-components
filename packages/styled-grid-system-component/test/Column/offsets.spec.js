import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Column } from '../../src';

// TODO: how to check @media queries
test('Styles matches Column with specified xs offset', () => {
  const tree = renderer.create(<Column xsOffset={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified sm offset', () => {
  const tree = renderer.create(<Column smOffset={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified md offset', () => {
  const tree = renderer.create(<Column mdOffset={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified lg offset', () => {
  const tree = renderer.create(<Column lgOffset={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified xl offset', () => {
  const tree = renderer.create(<Column xlOffset={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});
