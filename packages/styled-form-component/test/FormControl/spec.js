import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl', () => {
  const tree = renderer.create(<FormControl />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('padding', '0.375rem 0.75rem');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('color', '#495057');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('background-clip', 'padding-box');
  expect(tree).toHaveStyleRule('border', '1px solid #ced4da');
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&::-ms-expand',
  });
  expect(tree).toHaveStyleRule('color', '#495057', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('background-color', '#fff', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('border-color', '#ced4da', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('outline', '0', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '&::placeholder',
  });
  expect(tree).toHaveStyleRule('opacity', '1', {
    modifier: '&::placeholder',
  });
});
