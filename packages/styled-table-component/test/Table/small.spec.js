import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Table } from '../../src';

test('Styles matches Table small', () => {
  const tree = renderer.create(<Table sm />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0.3rem', {
    modifier: '& th',
  });
  expect(tree).toHaveStyleRule('padding', '0.3rem', {
    modifier: '& td',
  });
});
