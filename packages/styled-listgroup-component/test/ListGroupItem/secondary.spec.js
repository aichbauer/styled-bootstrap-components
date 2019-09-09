import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem secondary action', () => {
  const tree = renderer.create(<ListGroupItem secondary action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem secondary', () => {
  const tree = renderer.create(<ListGroupItem secondary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem secondary active', () => {
  const tree = renderer.create(<ListGroupItem secondary active />).toJSON();
  expect(tree).toMatchSnapshot();
});
