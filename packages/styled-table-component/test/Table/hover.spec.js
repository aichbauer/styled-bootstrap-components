import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table hover', () => {
  const tree = renderer.create(<Table hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,0.075)', {
    modifier: '& tbody tr:hover',
  });
});
