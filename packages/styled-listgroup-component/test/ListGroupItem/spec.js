import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem', () => {
  const tree = renderer.create(<ListGroupItem />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('padding', '0.75rem 1.25rem');
  expect(tree).toHaveStyleRule('margin-bottom', '-1px');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('border', '1px solid rgba(0,0,0,0.125)');
  expect(tree).toHaveStyleRule('border-top-left-radius', '0.25rem', {
    modifier: '&:first-child',
  });
  expect(tree).toHaveStyleRule('border-top-right-radius', '0.25rem', {
    modifier: '&:first-child',
  });
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '&:last-child',
  });
  expect(tree).toHaveStyleRule('border-bottom-right-radius', '0.25rem', {
    modifier: '&:last-child',
  });
  expect(tree).toHaveStyleRule('border-bottom-left-radius', '0.25rem', {
    modifier: '&:last-child',
  });
  expect(tree).toHaveStyleRule('z-index', '1', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:hover',
  });
  expect(tree).toHaveStyleRule('z-index', '1', {
    modifier: '& > a:focus',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '& > a:focus',
  });
});
