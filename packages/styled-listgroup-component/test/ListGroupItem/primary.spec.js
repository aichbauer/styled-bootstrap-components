import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem primary action', () => {
  const tree = renderer.create(<ListGroupItem primary action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem primary', () => {
  const tree = renderer.create(<ListGroupItem primary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem primary active', () => {
  const tree = renderer.create(<ListGroupItem primary active />).toJSON();
  expect(tree).toMatchSnapshot();
});
