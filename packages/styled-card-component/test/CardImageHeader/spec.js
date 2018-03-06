import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { CardImageHeader } from '../../src';

test('Styles matches CardImageHeader', () => {
  const tree = renderer.create(<CardImageHeader />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('border-top-left-radius', 'calc(0.25rem - 1px)');
  expect(tree).toHaveStyleRule('border-top-right-radius', 'calc(0.25rem - 1px)');
});
