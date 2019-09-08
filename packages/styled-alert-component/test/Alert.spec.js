import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Alert } from '../src';

test('Styles matches plane', () => {
  const tree = renderer.create(<Alert />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('padding', '0.75rem 1.25rem');
  expect(tree).toHaveStyleRule('border', '1px solid transparent');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('font-weight', '700', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h1',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h2',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h3',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h4',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h5',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h6',
  });
});
