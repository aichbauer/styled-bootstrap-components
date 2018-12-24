import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup nomb', () => {
  const tree = renderer.create(<FormGroup nomb />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-bottom', '0');
});

test('Styles matches FormGroup nomb row', () => {
  const tree = renderer.create(<FormGroup nomb row />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin-right', '-5px');
  expect(tree).toHaveStyleRule('margin-left', '-5px');
  expect(tree).toHaveStyleRule('margin-bottom', '0');
  expect(tree).toHaveStyleRule('margin-bottom', '0', {
    modifier: '& > div > label',
  });
});
