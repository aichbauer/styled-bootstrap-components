
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipArrow } from '../../src';

test('Styles matches TooltipArrow', () => {
  const tree = renderer.create(<TooltipArrow />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'absolute');
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '0.8rem');
  expect(tree).toHaveStyleRule('height', '0.4rem');
  expect(tree).toHaveStyleRule('position', 'absolute', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('content', '""', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('border-color', 'transparent', {
    modifier: '&::before',
  });
  expect(tree).toHaveStyleRule('border-style', 'solid', {
    modifier: '&::before',
  });
});
