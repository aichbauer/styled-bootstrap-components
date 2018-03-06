
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TooltipInner } from '../../src';

test('Styles matches TooltipInner', () => {
  const tree = renderer.create(<TooltipInner />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('max-width', '200px');
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.5rem');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('background-color', '#000');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
});
