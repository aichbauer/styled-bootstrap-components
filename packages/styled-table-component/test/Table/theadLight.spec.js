import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table theadLight', () => {
  const tree = renderer.create(<Table theadLight />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#495057', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('background-color', '#e9ecef', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('border-color', '#dee2e6', {
    modifier: '& thead th',
  });
});
