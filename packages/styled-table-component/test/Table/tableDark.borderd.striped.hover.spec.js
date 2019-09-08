import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table tableDark bordered striped hover', () => {
  const tree = renderer.create(<Table tableDark bordered striped hover />).toJSON();
  expect(tree).toMatchSnapshot();
});
