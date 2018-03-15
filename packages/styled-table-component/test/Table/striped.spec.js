import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table striped', () => {
  const tree = renderer.create(<Table striped />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.05)', {
    modifier: '& tbody tr:nth-of-type(odd)',
  });
});
