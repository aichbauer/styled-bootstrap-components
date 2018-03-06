import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { BreadcrumbItem } from '../src';

test('Styles matches BreadcrumbItem', () => {
  const tree = renderer.create(<BreadcrumbItem />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block', {
    modifier: '&:not(:first-child)::before',
  });
  expect(tree).toHaveStyleRule('padding-right', '0.5rem', {
    modifier: '&:not(:first-child)::before',
  });
  expect(tree).toHaveStyleRule('padding-left', '0.5rem', {
    modifier: '&:not(:first-child)::before',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '&:not(:first-child)::before',
  });
  expect(tree).toHaveStyleRule('content', '"/"', {
    modifier: '&:not(:first-child)::before',
  });
});

test('Styles matches BreadcrumbItem active', () => {
  const tree = renderer.create(<BreadcrumbItem active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
});
