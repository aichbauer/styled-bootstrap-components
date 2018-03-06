import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardHeader } from '../../src';

test('Styles matches CardHeader', () => {
  const tree = renderer.create(<CardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.75rem 1.25rem');
  expect(tree).toHaveStyleRule('background-color', '#fff');
  expect(tree).toHaveStyleRule('border-bottom', '1px solid rgba(0,0,0,0.125)');
  expect(tree).toHaveStyleRule('border-top-left-radius', 'calc(0.25rem - 1px)');
  expect(tree).toHaveStyleRule('border-top-right-radius', 'calc(0.25rem - 1px)');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-flow', 'row wrap');
  expect(tree).toHaveStyleRule('justify-content', 'center');
});
