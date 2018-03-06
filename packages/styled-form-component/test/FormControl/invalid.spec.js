import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FormControl } from '../../src';

test('Styles matches FormControl invalid', () => {
  const tree = renderer.create(<FormControl invalid />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-color', '#dc3545');
  expect(tree).toHaveStyleRule('border-color', '#dc3545', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.25)', {
    modifier: '&:focus',
  });
});
