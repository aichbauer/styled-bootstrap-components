import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav justified', () => {
  const tree = renderer.create(<Nav justified />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-basis', '0', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('flex-grow', '1', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('text-align', 'center', {
    modifier: '& > a',
  });
});
