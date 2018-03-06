import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ButtonGroup } from '../../src';

// TODO: how to check nested rules in nested rules e.g. & > button + &:hover
test('Styles matches ButtonGroup', () => {
  const tree = renderer.create(<ButtonGroup />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('display', 'inline-flex');
  expect(tree).toHaveStyleRule('vertical-align', 'middle');
  expect(tree).toHaveStyleRule('line-height', '1.5', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('position', 'relative', {
    modifier: '& > button',
  });
  expect(tree).toHaveStyleRule('flex', '0 1 auto', {
    modifier: '& > button',
  });
});
