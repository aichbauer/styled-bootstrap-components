import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormGroup } from '../../src';

test('Styles matches FormGroup noRadius', () => {
  const tree = renderer.create(<FormGroup noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > input',
  });
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > div > input',
  });
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > :not(input[type=file])',
  });
  expect(tree).toHaveStyleRule('border-radius', '0', {
    modifier: '& > div > :not(input[type=file])',
  });
});
