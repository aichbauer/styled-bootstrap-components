import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ListGroup } from '../../src';

test('Styles matches ListGroup', () => {
  const tree = renderer.create(<ListGroup />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('padding-left', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '0');
});
