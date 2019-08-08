import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Nav } from '../../src';

test('Styles matches Nav tabs', () => {
  const tree = renderer.create(<Nav tabs />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-bottom', '1px solid #cccecf');
  expect(tree).toHaveStyleRule('margin-bottom', '-1px', {
    modifier: '& > a',
  });
});
