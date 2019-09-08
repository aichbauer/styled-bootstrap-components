import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem info action', () => {
  const tree = renderer.create(<ListGroupItem info action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem info', () => {
  const tree = renderer.create(<ListGroupItem info />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem info active', () => {
  const tree = renderer.create(<ListGroupItem info active />).toJSON();
  expect(tree).toMatchSnapshot();
});

