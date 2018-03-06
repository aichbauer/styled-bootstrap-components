import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormCheckInput } from '../../src';

test('Styles matches FormCheckInput disabled', () => {
  const tree = renderer.create(<FormCheckInput disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#6c757d');
  expect(tree).toHaveStyleRule('color', '#6c757d', {
    modifier: '& + label',
  });
});
