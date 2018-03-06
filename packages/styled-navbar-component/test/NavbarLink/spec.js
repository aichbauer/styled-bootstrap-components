import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { NavbarLink } from '../../src';

test('Styles matches NavbarLink brand', () => {
  const tree = renderer.create(<NavbarLink brand />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('padding-top', '0.3125rem');
  expect(tree).toHaveStyleRule('padding-bottom', '0.3125rem');
  expect(tree).toHaveStyleRule('font-size', '1.25rem');
  expect(tree).toHaveStyleRule('line-height', 'inherit');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
});

test('Styles matches NavbarLink light active', () => {
  const tree = renderer.create(<NavbarLink light active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.9)');
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.9)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.9)', {
    modifier: '&:focus',
  });
});

test('Styles matches NavbarLink light disabled', () => {
  const tree = renderer.create(<NavbarLink light disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.3)');
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.3)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.3)', {
    modifier: '&:focus',
  });
});

test('Styles matches NavbarLink light disabled', () => {
  const tree = renderer.create(<NavbarLink light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.5)');
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.7)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(0,0,0,0.7)', {
    modifier: '&:focus',
  });
});

test('Styles matches NavbarLink dark active', () => {
  const tree = renderer.create(<NavbarLink dark active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.9)');
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.9)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.9)', {
    modifier: '&:focus',
  });
});

test('Styles matches NavbarLink dark disabled', () => {
  const tree = renderer.create(<NavbarLink dark disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.25)');
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.25)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.25)', {
    modifier: '&:focus',
  });
});

test('Styles matches NavbarLink dark disabled', () => {
  const tree = renderer.create(<NavbarLink dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.5)');
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.75)', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('color', 'rgba(255,255,255,0.75)', {
    modifier: '&:focus',
  });
});

