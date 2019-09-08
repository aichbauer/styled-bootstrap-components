import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table bordered', () => {
  const tree = renderer.create(<Table bordered />).toJSON();
  expect(tree).toMatchSnapshot();
});
