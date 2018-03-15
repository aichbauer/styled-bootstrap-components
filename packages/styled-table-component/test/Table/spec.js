import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table', () => {
  const tree = renderer.create(<Table />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('max-width', '100%');
  expect(tree).toHaveStyleRule('margin-bottom', '1rem');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('padding', '0.75rem', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('vertical-align', 'top', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('border-top', '1px solid #dee2e6', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('padding', '0.75rem', {
    modifier: '& td',
  });
  expect(tree).toHaveStyleRule('vertical-align', 'top', {
    modifier: '& td',
  });
  expect(tree).toHaveStyleRule('border-top', '1px solid #dee2e6', {
    modifier: '& td',
  });
  expect(tree).toHaveStyleRule('vertical-align', 'bottom', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('border-bottom', '2px solid #dee2e6', {
    modifier: '& thead th',
  });
});
