import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl valid', () => {
  const tree = renderer.create(<FormControl valid />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-color', '#28a745');
  expect(tree).toHaveStyleRule('border-color', '#28a745', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.25)', {
    modifier: '&:focus',
  });
});
