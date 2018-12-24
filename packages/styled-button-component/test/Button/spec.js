import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test('Styles matches Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('vertical-align', 'middle');
  expect(tree).toHaveStyleRule('user-select', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d');
  expect(tree).toHaveStyleRule('padding', '0.375rem 0.75rem');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('transition', 'color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out');
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('outline', '0', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});
