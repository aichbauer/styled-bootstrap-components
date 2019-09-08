import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem dark action', () => {
  const tree = renderer.create(<ListGroupItem dark action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem dark', () => {
  const tree = renderer.create(<ListGroupItem dark />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem dark active', () => {
  const tree = renderer.create(<ListGroupItem dark active />).toJSON();
  expect(tree).toMatchSnapshot();
});
