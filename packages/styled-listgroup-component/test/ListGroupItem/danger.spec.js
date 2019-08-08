import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem danger action', () => {
  const tree = renderer.create(<ListGroupItem danger action />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem danger', () => {
  const tree = renderer.create(<ListGroupItem danger />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches ListGroupItem danger active', () => {
  const tree = renderer.create(<ListGroupItem danger active />).toJSON();
  expect(tree).toMatchSnapshot();
});

