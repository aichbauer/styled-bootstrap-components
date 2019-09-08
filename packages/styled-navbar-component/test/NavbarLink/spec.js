import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavbarLink } from '../../src';

test('Styles matches NavbarLink brand', () => {
  const tree = renderer.create(<NavbarLink brand />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink light active', () => {
  const tree = renderer.create(<NavbarLink light active />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink light disabled', () => {
  const tree = renderer.create(<NavbarLink light disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink light disabled', () => {
  const tree = renderer.create(<NavbarLink light />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink dark active', () => {
  const tree = renderer.create(<NavbarLink dark active />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink dark disabled', () => {
  const tree = renderer.create(<NavbarLink dark disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches NavbarLink dark disabled', () => {
  const tree = renderer.create(<NavbarLink dark />).toJSON();
  expect(tree).toMatchSnapshot();
});

