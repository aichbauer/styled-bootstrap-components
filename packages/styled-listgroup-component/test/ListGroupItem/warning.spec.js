import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem warning action', () => {
  const tree = renderer.create(<ListGroupItem warning action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem warning', () => {
  const tree = renderer.create(<ListGroupItem warning />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem warning active', () => {
  const tree = renderer.create(<ListGroupItem warning active />).toJSON();
  expect(tree).toMatchSnapshot();
});
