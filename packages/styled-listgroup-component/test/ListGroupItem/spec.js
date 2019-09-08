import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroupItem } from '../../src';

test('Styles matches ListGroupItem', () => {
  const tree = renderer.create(<ListGroupItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
