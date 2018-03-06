
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { PopoverHeader } from '../../src';

test('Styles matches PopoverHeader', () => {
  const tree = renderer.create(<PopoverHeader />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.5rem 0.75rem');
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('color', 'inherit');
  expect(tree).toHaveStyleRule('background-color', '#f7f7f7');
  expect(tree).toHaveStyleRule('border-bottom', '1px solid #ebebeb');
  expect(tree).toHaveStyleRule('border-top-left-radius', 'calc(0.3rem - 1px)');
  expect(tree).toHaveStyleRule('border-top-right-radius', 'calc(0.3rem - 1px)');
  expect(tree).toHaveStyleRule('display', 'none', {
    modifier: '&:empty',
  });
});

test('Styles matches PopoverHeader h1', () => {
  const tree = renderer.create(<PopoverHeader h1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h2', () => {
  const tree = renderer.create(<PopoverHeader h2 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h3', () => {
  const tree = renderer.create(<PopoverHeader h3 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h4', () => {
  const tree = renderer.create(<PopoverHeader h4 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h5', () => {
  const tree = renderer.create(<PopoverHeader h5 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles matches PopoverHeader h6', () => {
  const tree = renderer.create(<PopoverHeader h6 />).toJSON();
  expect(tree).toMatchSnapshot();
});
