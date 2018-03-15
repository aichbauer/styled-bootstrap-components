import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table responsiveXl bordered', () => {
  const tree = renderer.create(<Table responsiveXl bordered />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block', {
    media: '(max-width:1199.98px)',
  });
  expect(tree).toHaveStyleRule('width', '100%', {
    media: '(max-width:1199.98px)',
  });
  expect(tree).toHaveStyleRule('overflow-x', 'auto', {
    media: '(max-width:1199.98px)',
  });
  expect(tree).toHaveStyleRule('border', '0', {
    media: '(max-width:1199.98px)',
  });
});
