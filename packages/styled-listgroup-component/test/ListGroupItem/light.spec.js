import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem light action', () => {
  const tree = renderer.create(<ListGroupItem light action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem light', () => {
  const tree = renderer.create(<ListGroupItem light />).toJSON();
  expect(tree).toMatchSnapshot();
});


test('Styles matches ListGroupItem light active', () => {
  const tree = renderer.create(<ListGroupItem light active />).toJSON();
  expect(tree).toMatchSnapshot();
});
