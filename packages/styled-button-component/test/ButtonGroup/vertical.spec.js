import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ButtonGroup } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > button + &:not(:last-child)
test('Styles matches ButtonGroup', () => {
  const tree = renderer.create(<ButtonGroup vertical />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('align-items', 'flex-start');
  expect(tree).toHaveStyleRule('justify-content', 'center');
  expect(tree).toHaveStyleRule('width', '100%', {
    modifier: '& > button',
  });
});
