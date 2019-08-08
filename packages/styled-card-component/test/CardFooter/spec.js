import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardFooter } from '../../src';

test('Styles matches CardFooter', () => {
  const tree = renderer.create(<CardFooter />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.75rem 1.25rem');
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.05)');
  expect(tree).toHaveStyleRule('border-top', '1px solid rgba(0,0,0,0.125)');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-flow', 'row wrap');
  expect(tree).toHaveStyleRule('justify-content', 'center');
  expect(tree).toHaveStyleRule('margin', '-3px');
  expect(tree).toHaveStyleRule('border-radius', '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)', {
    modifier: '&:last-child',
  });
});
