import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table theadLight', () => {
  const tree = renderer.create(<Table theadLight />).toJSON();
  expect(tree).toMatchSnapshot();
});
