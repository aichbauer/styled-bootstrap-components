import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Row } from '../../src';

test('Styles matches Row', () => {
  const tree = renderer.create(<Row />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('box-sizing', 'border-box');
  expect(tree).toHaveStyleRule('display', 'flex');
  expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
  expect(tree).toHaveStyleRule('list-style', 'none');
});
