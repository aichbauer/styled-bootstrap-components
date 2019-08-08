import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Column } from '../../src';

// TODO: how to check @media queries
test('Styles matches Column with specified xs size', () => {
  const tree = renderer.create(<Column xs={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified sm size', () => {
  const tree = renderer.create(<Column sm={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified md size', () => {
  const tree = renderer.create(<Column md={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified lg size', () => {
  const tree = renderer.create(<Column lg={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches Column with specified xl size', () => {
  const tree = renderer.create(<Column xl={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});
