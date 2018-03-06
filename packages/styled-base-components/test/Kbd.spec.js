import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Kbd } from '../src';

test('Styles matches Kbd', () => {
  const tree = renderer.create(<Kbd />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-family', 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace');
  expect(tree).toHaveStyleRule('padding', '0.2rem 0.4rem');
  expect(tree).toHaveStyleRule('font-size', '87.5%');
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#212529');
  expect(tree).toHaveStyleRule('border-radius', '0.2rem');
  expect(tree).toHaveStyleRule('padding', '0', {
    modifier: '& > kbd',
  });
  expect(tree).toHaveStyleRule('font-size', '100%', {
    modifier: '& > kbd',
  });
  expect(tree).toHaveStyleRule('font-weight', '700', {
    modifier: '& > kbd',
  });
});
