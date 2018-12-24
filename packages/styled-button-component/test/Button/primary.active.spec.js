import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from '../../src';

test.only('Styles matches Button primary active', () => {
  const tree = renderer.create(<Button primary active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#0062cc');
  expect(tree).toHaveStyleRule('border', '1px solid #005cbf');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#0062cc', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #005cbf', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});
