import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem success action', () => {
  const tree = renderer.create(<ListGroupItem success action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem success', () => {
  const tree = renderer.create(<ListGroupItem success />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem success active', () => {
  const tree = renderer.create(<ListGroupItem success active />).toJSON();
  expect(tree).toMatchSnapshot();
});
