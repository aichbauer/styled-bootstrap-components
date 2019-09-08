import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table striped', () => {
  const tree = renderer.create(<Table striped />).toJSON();
  expect(tree).toMatchSnapshot();
});
