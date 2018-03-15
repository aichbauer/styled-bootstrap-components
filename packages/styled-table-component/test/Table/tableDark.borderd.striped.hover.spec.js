import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table tableDark bordered striped hover', () => {
  const tree = renderer.create(<Table tableDark bordered striped hover />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#212529');
  expect(tree).toHaveStyleRule('border-color', '#32383e', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('border-color', '#32383e', {
    modifier: '& td',
  });
  expect(tree).toHaveStyleRule('border-color', '#32383e', {
    modifier: '& thead th',
  });
  expect(tree).toHaveStyleRule('border', '0');
  expect(tree).toHaveStyleRule('background-color', 'rgba(255,255,255,0.05)', {
    modifier: '& tbody tr:nth-of-type(odd)',
  });
  expect(tree).toHaveStyleRule('background-color', 'rgba(255,255,255,0.075)', {
    modifier: '& tbody tr:hover',
  });
});
