import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table bordered', () => {
  const tree = renderer.create(<Table bordered />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border', '1px solid #dee2e6');
  expect(tree).toHaveStyleRule('border', '1px solid #dee2e6', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #dee2e6', {
    modifier: '& td',
  });
  expect(tree).toHaveStyleRule('border-bottom-width', '2px', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('border-bottom-width', '2px', {
    modifier: '& thead td',
  });
});
