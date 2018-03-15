import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table theadDark', () => {
  const tree = renderer.create(<Table theadDark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('background-color', '#212529', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('border-color', '#32383e', {
    modifier: '& thead th',
  });
});
