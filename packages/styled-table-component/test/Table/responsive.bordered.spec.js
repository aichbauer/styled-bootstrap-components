import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table responsive bordered', () => {
  const tree = renderer.create(<Table responsive bordered />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('overflow-x', 'auto');
});
