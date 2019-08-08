import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table theadDark', () => {
  const tree = renderer.create(<Table theadDark />).toJSON();
  expect(tree).toMatchSnapshot();
});
